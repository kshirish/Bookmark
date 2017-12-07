import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { updateActiveTab } from '../actions';
import { Redirect } from 'react-router-dom';

import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

const Login = ({loginActiveTab, isLoggedIn, toggle}) => {

	if(isLoggedIn)
		return <Redirect to="/"/>;

	return <Row>
		<Col sm="12" md={{ size: 8, offset: 2 }}>
			<Nav tabs>
				<NavItem>
					<NavLink className={classnames({ active: loginActiveTab === '1' })}
					onClick={() => toggle('1')}>
					Log in
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink className={classnames({ active: loginActiveTab === '2' })}
					onClick={() => toggle('2')}>
					Sign up
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={loginActiveTab}>
				<TabPane tabId="1">
					<Row>
						<Col sm="12">
							<LoginForm toggle={toggle}/>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="2">
					<Row>
						<Col sm="12">							
							<SignupForm/>
						</Col>
					</Row>
				</TabPane>
			</TabContent>
		</Col>
	</Row>
}

const mapStateToProps = function(state) {
	return {
		loginActiveTab: state.misc.loginActiveTab,
		isLoggedIn: state.logged.token
	};
};

const mapDispatchToProps = function(dispatch) {
	return {
		toggle: function(to) {
			dispatch(updateActiveTab(to));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);