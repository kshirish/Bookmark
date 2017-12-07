import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleHeader, toggleModal, updateNewItem, newItemApi } from '../actions';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
	Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const CustomNavbar = ({user = {}, token, isNavbarOpen, link, tags, rating, isModalOpen, toggleNav, toggleModal, handleChange, addItem}) => {

	let content;

	if(user._id)
		
		content = <UncontrolledDropdown nav >
			<DropdownToggle nav caret>
				Hi, {user.username}
			</DropdownToggle>
			<DropdownMenu >                 
				<DropdownItem onClick={e => toggleModal(e)}>
				&#43; Add Item
				</DropdownItem>
				<DropdownItem divider />
				<DropdownItem>
				Logout
				</DropdownItem>
			</DropdownMenu>
		</UncontrolledDropdown>

	return <div>
		<Navbar color="primary" dark expand="md" fixed="top">
			<NavbarBrand tag={Link} to="/" href="/">Bookmark</NavbarBrand>
			<NavbarToggler onClick={e => toggleNav(e)} />
			<Collapse isOpen={isNavbarOpen} navbar>
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink tag={Link} to="/about">About</NavLink>
					</NavItem>
					{content}
				</Nav>
			</Collapse>
		</Navbar>
		<Modal size="md" isOpen={isModalOpen} toggle={toggleModal} className="new-item-container">
			<ModalHeader toggle={toggleModal}>Add new Item</ModalHeader>
				<ModalBody>
					<Form onSubmit={e => addItem(e, link, tags, rating, token)}>
						<FormGroup>
							<Label for="exampleLink">Link</Label>
							<Input type="text" name="link" value={link} onChange={e => handleChange(e)} id="exampleLink" placeholder="Paste link here" />
						</FormGroup>
						<FormGroup>
							<Label for="exampleText">Tags (Comma separated)</Label>
							<Input type="textarea" name="tags" value={tags} onChange={e => handleChange(e)} id="exampleText" placeholder="Social,Political,Tech"/>
						</FormGroup>
						<FormGroup tag="fieldset">
							<legend>Ratings</legend>
							<FormGroup check inline>
								<Label check>
									<Input type="radio" name="rating" value="Ok" checked={rating === 'Ok'} onChange={e => handleChange(e)} /> Ok
								</Label>
							</FormGroup>
							<FormGroup check inline>
								<Label check>
									<Input type="radio" name="rating" value="Good" checked={rating === 'Good'} onChange={e => handleChange(e)} /> Good
								</Label>
							</FormGroup>
							<FormGroup check inline>
								<Label check>
									<Input type="radio" name="rating" value="Useful" checked={rating === 'Useful'} onChange={e => handleChange(e)} /> Useful
								</Label>
							</FormGroup>
							<FormGroup check inline>
								<Label check>
									<Input type="radio" name="rating" value="Must" checked={rating === 'Must'} onChange={e => handleChange(e)} /> Must
								</Label>
							</FormGroup>
						</FormGroup>						
						<Button color="primary">Add</Button> {' '}
						<Button outline color="primary" onClick={toggleModal}>Cancel</Button>
					</Form>
				</ModalBody>
		</Modal>
	</div>	
}

const mapStateToProps = function(state) {
	
	return {
		isNavbarOpen: state.misc.isNavbarOpen,
		isModalOpen: state.misc.isModalOpen,
		user: state.logged.user,
		token: state.logged.token,
		link: state.misc.newItemForm.link,
		tags: state.misc.newItemForm.tags,
		rating: state.misc.newItemForm.rating
	};
};

const mapDispatchToProps = function(dispatch) {
	
	return {
		toggleNav: function(e) {
			dispatch(toggleHeader());
		},
		toggleModal: function(e) {
			dispatch(toggleModal());
		},
		handleChange: function(e) {
			dispatch(updateNewItem({ name: e.target.name, value: e.target.value }));
		},
		addItem: function(e, link, tags, rating, token) {
			e.preventDefault();
			dispatch(newItemApi(link, tags, rating, token));
			dispatch(toggleModal());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomNavbar);