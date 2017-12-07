import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { signupApi, updateSignup } from '../actions';
import { Alert, Form, FormGroup, Label, Input, Button } from 'reactstrap';  

const SignupForm = ({ fullname, username, password, alert, handleChange, signupSubmit }) => (
	<div>
		<Alert color={alert.type} className={classnames({ hide: !alert.message })}>{alert.message}</Alert>
		<Form onSubmit={signupSubmit}>		
			<FormGroup>
				<Label for="exampleName">Full Name</Label>
				<Input type="text" value={fullname} onChange={e => handleChange(e)} name="fullname" id="exampleName" placeholder="Full Name" />
			</FormGroup>
			<FormGroup>
				<Label for="exampleUsername">Username</Label>
				<Input type="text" value={username} onChange={e => handleChange(e)} name="username" id="exampleUsername" placeholder="Username" />
			</FormGroup>
			<FormGroup>
				<Label for="examplePassword">Password</Label>
				<Input type="password" value={password} onChange={e => handleChange(e)} name="password" id="examplePassword" placeholder="Password" />
			</FormGroup>
			<Button outline color="primary">Sign up</Button>
		</Form>
	</div>	
);

const mapStateToProps = function(state) {
	return {
		fullname: state.misc.signupForm.fullname,
		username: state.misc.signupForm.username,
		password: state.misc.signupForm.password,
		alert: state.misc.signupForm.alert
	};
};

const mapDispatchToProps = function(dispatch) {
	return {
		handleChange: function(e) {
			dispatch(updateSignup({ name: e.target.name, value: e.target.value }));
		},
		signupSubmit: function(e, fullname, username, password) {
			e.preventDefault();
			dispatch(signupApi(fullname, username, password));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignupForm);