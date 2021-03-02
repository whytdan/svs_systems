import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { adminContext } from '../../../../App';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Field, Form, Formik } from 'formik';


export default function OffersAdminModal() {
	const [open, setOpen] = React.useState(false);
	// const [currentAdmin] = React.useContext(adminContext);

	const initialValues = {
		title: "",
		description: ""
	}

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};


	return (
		<div>
			{/* {
				currentAdmin ? (
					<IconButton style={{ position: 'absolute', right: 20 }} onClick={handleClickOpen}>
						<EditIcon color="primary" />
					</IconButton>
				) : null
			} */}

			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth maxWidth="md">
				<Formik
					initialValues={initialValues}
				>
					{({
						errors,
						values
					}) => (

						<Form>
							<DialogTitle id="form-dialog-title">Страница предложений</DialogTitle>
							<DialogContent>

								<Field
									name="title"
									type="text"
									fullWidth
									variant="outlined"
									label="Заголовок секции"
									as={TextField}
								/>

								<Field
									type="text"
									name="description"
									fullWidth
									variant="outlined"
									as={TextField}
									multiline
									rows={4}
									style={{marginTop: 25}}
									label="Описание"
								/>

								{/* <TextField
									autoFocus
									margin="dense"
									id="name"
									label="Email Address"
									type="email"
									fullWidth
								/> */}


								<DialogActions>
									<Button onClick={handleClose} color="primary">
										Cancel
									</Button>

									<Button onClick={handleClose} color="primary">
										Subscribe
							</Button>
								</DialogActions>
							</DialogContent>
						</Form>
					)}
				</Formik>


			</Dialog>
		</div>
	);
}
