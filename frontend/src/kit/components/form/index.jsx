import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import InputMask from "react-input-mask";
import * as Yup from 'yup';

import {
  Button,
} from './styles';
import {FormGroup, makeStyles, withStyles, MenuItem, TextField} from '@material-ui/core';
import TextError from './TextError';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';


const {REACT_APP_API_URL, REACT_APP_EMAIL_SERVICE_LOGIN, REACT_APP_EMAIL_SERVICE_PASSWORD} = process.env;

const useStyles = makeStyles({
  form: {
    maxWidth: 700,
    margin: '30px auto 0',
    display: 'flex',
    flexDirection: 'column'
  },
  formInputWrapper: {
    marginBottom: 30
  }
})


const CustomTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#4f4f4f',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#041c3f',
    },
  },
})(TextField);

const notifyRequestSent = () => {
  toast("Ваш запрос успешно отправлен!", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: 'success'
  });
}

const notifyRequestDecline = () => {
  toast("Что-то пошло не так!", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: 'error'
  });
}

export default function ApplicationForm() {

  const classes = useStyles();

  const initialValues = {
    fullName: '',
    contactType: 'PHONE_NUMBER',
    phoneNumber: '',
    email: '',
    message: '',
  }


  const validationSchema = Yup.object({
    fullName: Yup.string().required('Это обязательное поле'),
    phoneNumber: Yup.string().when('contactType', {
      is: 'PHONE_NUMBER',
      then: Yup.string().required("Обязательное поле!")
    }),
    email: Yup.string().when('contactType', {
      is: 'EMAIL',
      then: Yup.string().email('Не верный формат email').required('Это обязательное поле')
    }),
    message: Yup.string().required('Это обязательное поле'),
  })

  const onSubmit = (values, {resetForm}) => {
    axios.post(`${REACT_APP_API_URL}/api/secondary/application-requests/`, {
      sender: values.fullName,
      phone_number: values.phoneNumber,
      email: values.email,
      message: values.message
    }).then(async () => {

      notifyRequestSent();
      resetForm();
      window.Email.send({
        Host: "smtp.gmail.com",
        Username: REACT_APP_EMAIL_SERVICE_LOGIN,
        Password: REACT_APP_EMAIL_SERVICE_PASSWORD,
        To: "whytdan@gmail.com",
        From: REACT_APP_EMAIL_SERVICE_LOGIN,
        Subject: `Новое сообщение на сайте svs.kg от ${values.fullName}`,
        Body: values.message
      })
    }).catch(() => {
      notifyRequestDecline()
      resetForm();
    })
  }

  const contactTypes = [
    {
      id: "PHONE_NUMBER",
      value: "PHONE_NUMBER",
      label: "Телефон"
    },
    {
      id: "EMAIL",
      value: "EMAIL",
      label: "Почта"
    }
  ]

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >

      {({
          values,
          setFieldValue
        }) => (
        <>
          <Form className={classes.form}>

            <div className={classes.formInputWrapper}>
              <Field
                name="fullName"
                as={CustomTextField}
                label="ФИО"
                fullWidth
                style={{fontFamily: "'Ubuntu', sans-serif",}}
              />

              <ErrorMessage component={TextError} name="fullName"/>
            </div>

            <FormGroup className={classes.formInputWrapper}>
              <Field
                component={CustomTextField}
                type="text"
                name="contactType"
                label="Как нам с вами связаться?"
                select
                fullwidth="true"
                style={{textAlign: 'left', fontFamily: "'Ubuntu', sans-serif"}}
                value={values.contactType}
                onChange={(e) => setFieldValue("contactType", e.target.value)}
              >
                {
                  contactTypes.map(type => (
                    <MenuItem
                      styles={{marginTop: 10}}
                      key={type.value}
                      value={type.value}
                    >
                      {type.label}
                    </MenuItem>
                  ))
                }
              </Field>
            </FormGroup>

            {
              values.contactType === 'PHONE_NUMBER' ? (
                <div className={classes.formInputWrapper}>
                  <Field name="phoneNumber">
                    {({field}) => (
                      <InputMask {...field} mask="+\9\96 999 999 999">
                        {(innerProps) => (
                          <CustomTextField
                            {...innerProps}
                            style={{fontFamily: "'Ubuntu', sans-serif"}}
                            label="Номер телефона"
                            fullWidth
                          />
                        )}
                      </InputMask>
                    )}
                  </Field>
                  <ErrorMessage component={TextError} name="phoneNumber"/>
                </div>
              ) : null
            }

            {
              values.contactType === 'EMAIL' ? (
                <div className={classes.formInputWrapper}>
                  <Field
                    name="email"
                    as={CustomTextField}
                    style={{fontFamily: "'Ubuntu', sans-serif"}}
                    label="Email"
                    fullWidth
                  />
                  <ErrorMessage component={TextError} name="email"/>
                </div>
              ) : null
            }

            <div className={classes.formInputWrapper}>
              <Field
                name="message"
                as={CustomTextField}
                label="Сообщение"
                style={{fontFamily: "'Ubuntu', sans-serif"}}
                fullWidth
                multiline
                rows={8}
              />
              <ErrorMessage component={TextError} name="message"/>
            </div>

            <Button type='submit'>Отправить</Button>
          </Form>
          <ToastContainer/>
        </>
      )}
    </Formik>
  );
}
