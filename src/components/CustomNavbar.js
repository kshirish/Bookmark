import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleHeader } from '../actions';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const CustomNavbar = ({logged, isNavbarOpen, toggle}) => {

	let content;

	if(logged._id)
		
		content = <UncontrolledDropdown nav >
			<DropdownToggle nav caret>
				Hi, {logged.username}
			</DropdownToggle>
			<DropdownMenu >                 
				<DropdownItem>
				&#43; Add Item
				</DropdownItem>
				<DropdownItem divider />
				<DropdownItem>
				Logout
				</DropdownItem>
			</DropdownMenu>
		</UncontrolledDropdown>

	return <Navbar color="primary" dark expand="md" fixed="top">
		<NavbarBrand tag={Link} to="/" href="/">Bookmark</NavbarBrand>
		<NavbarToggler onClick={e => toggle(e)} />
		<Collapse isOpen={isNavbarOpen} navbar>
			<Nav className="ml-auto" navbar>
				<NavItem>
					<NavLink tag={Link} to="/about">About</NavLink>
				</NavItem>
				{content}
			</Nav>
		</Collapse>
	</Navbar>
}

const mapStateToProps = function(state) {
	
	return {
		isNavbarOpen: state.misc.isNavbarOpen,
		logged: state.logged
	};
};

const mapDispatchToProps = function(dispatch) {
	
	return {
		toggle: function(e) {
			dispatch(toggleHeader());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomNavbar);