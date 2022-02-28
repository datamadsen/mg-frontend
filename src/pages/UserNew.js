import React, {Component} from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../lib/Input';
import SubmitButton from '../lib/SubmitButton';
import Form from '../lib/Form';
import H2 from '../lib/H2';
import Deck from '../lib/Deck';
import { MgUserApi } from '../services/MgApi';

const UserNew = () => {
	const [formData, updateFormData] = React.useState({});
	const [errorData, updateErrorData] = React.useState({});
	const navigation = useNavigate();

	const handleInputChange = (e) => {
		updateFormData({
			...formData,

			// Trim whitespace
			[e.target.name]: e.target.value.trim()
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!isValid())
			return;

		try {
			// create user
			await MgUserApi.create(formData["email"], formData["password"]);

			// login
			await MgUserApi.login(formData["email"], formData["password"]);

			// redirect
			navigation("/me");
		}
		catch (error) {
			debugger;
			if (error.response && error.response.data && error.response.data.message) {
				updateErrorData({ errGeneral: error.response.data.message });
			} else {
				updateErrorData({ errGeneral: "An unexpected error happened. Please try again later." });
				updateErrorData(error);
			}
		}
	};

	const isValid = () => {
		const email = formData["email"]
		const password = formData["password"]

		const errors = {
			errEmail: '',
			errPassword: ''
		}

		if (!password)
			errors.errPassword = 'Password is required';
		else
			errors.errPassword = '';

		if (!email)
			errors.errEmail = 'Email is required';
		else if (!/^.+@.+\..+$/.test(email))
			errors.errEmail = 'Email must be on the form hello@world.com';
		else
			errors.errEmail = '';

		updateErrorData(errors);

		return !errors.errEmail && !errors.errPassword;
	}

	return (
		<div>
			<H2 className="text-center">Start Guarding Your Mass</H2>

			<Deck>
				<p>Massguard is the kind of thing that helps with:</p>

				<ul className="list-disc list-outside ml-6 mt-2 mb-2">
					<li>Spotting weight change over time.</li>
					<li>Without you needing to see numbers on a scale.</li>
				</ul>

				<p>All you have to do is gaffa over your scale's display and sign up :-)</p>
			</Deck>

			<Form className="mt-6" onSubmit={handleSubmit}>
				<Input label="Email"
					id="register_form_email"
					type="text"
					name="email"
					autoComplete="email"
					onChange={handleInputChange}
					error={errorData["errEmail"]}
				/>

				<Input label="Password"
					id="register_form_password"
					type="password"
					name="password"
					autoComplete="new-password"
					onChange={handleInputChange}
					error={errorData["errPassword"]}
				/>

				<SubmitButton
					onClick={handleSubmit}
					value="Sign up"
					subtext="Your details are not shared with anyone."
					error={errorData["errGeneral"]}
				/>
			</Form>
		</div>
	)
}

export default UserNew;
