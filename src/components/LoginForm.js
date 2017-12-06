import React from 'react';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';  

const LoginForm = ({ toggle }) => (
	<Form>
		<FormGroup>
			<Label for="exampleEmail">Email</Label>
			<Input type="email" name="email" id="exampleEmail" placeholder="Email" />
		</FormGroup>
		<FormGroup>
			<Label for="examplePassword">Password</Label>
			<Input type="password" name="password" id="examplePassword" placeholder="Password" />
		</FormGroup>
		<Button outline color="primary">Log in</Button>{' '} <Button color="link" onClick={() => toggle('2')}>Create an account</Button>
	</Form>
);

export default LoginForm;