import React from 'react';
import { connect } from 'react-redux';
import { loginApi, updateLogin } from '../actions';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';  

const LoginForm = ({ username, password, toggle, handleChange, loginSubmit }) => (
	<Form onSubmit={e => loginSubmit(e, username, password)}>
		<FormGroup>
			<Label for="exampleUsername">Email</Label>
			<Input type="text" value={username} onChange={e => handleChange(e)} name="username" id="exampleUsername" placeholder="Username" />
		</FormGroup>
		<FormGroup>
			<Label for="examplePassword">Password</Label>
			<Input type="password" value={password} onChange={e => handleChange(e)} name="password" id="examplePassword" placeholder="Password" />
		</FormGroup>
		<Button outline color="primary">Log in</Button>{' '} 
		<Button color="link" onClick={() => toggle('2')}>Create an account</Button>
	</Form>
);

const mapStateToProps = function(state) {
	return {
		username: state.misc.loginForm.username,
		password: state.misc.loginForm.password
	};
};

const mapDispatchToProps = function(dispatch) {
	return {
		handleChange: function(e) {
			dispatch(updateLogin({ name: e.target.name, value: e.target.value }));
		},
		loginSubmit: function(e, username, password) {
			e.preventDefault();
			dispatch(loginApi(username, password));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm);