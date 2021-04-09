import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Field, Form, Formik } from 'formik';


export default function OffersAdminModal() {
	const [open, setOpen] = React.useState(false);

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
