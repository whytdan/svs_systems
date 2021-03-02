import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Input,
  Textarea,
  Button,
  ErrorMessage,
  StyledForm,
  InputsWrapper,
} from './styles';

export default function Form(props) {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Это обязательное поле'),
      phone: Yup.string()
        .min(12, 'Введите номер телефона в формате 0ХХХ ХХХ ХХХ')
        .required('Это обязательное поле'),
      message: Yup.string().required('Это обязательное поле'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <InputsWrapper>
        <div>
          <Input
            id='fullName'
            name='fullName'
            type='text'
            placeholder='Фио'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <ErrorMessage for='fullName'>{formik.errors.fullName}</ErrorMessage>
          ) : null}
        </div>
        <div>
          <Input
            id='phone'
            name='phone'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            placeholder='Номер телефона'
          />
          {formik.touched.phone && formik.errors.phone ? (
            <ErrorMessage for='phone'>{formik.errors.phone}</ErrorMessage>
          ) : null}
        </div>
      </InputsWrapper>
      <Textarea
        id='message'
        name='message'
        type='message'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        placeholder='Ваше сообщение'
      />
      {formik.touched.message && formik.errors.message ? (
        <ErrorMessage for='message'>{formik.errors.message}</ErrorMessage>
      ) : null}
      <Button type='submit'>Отправить</Button>
    </StyledForm>
  );
}
