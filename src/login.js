// css
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// modules
import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import request from 'superagent';
import { createLogger } from 'redux-logger';
import { Provider, connect } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import classnames from 'classnames';

import { Form, FormGroup, Label, Input, FormText, Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';

class App extends React.Component {
  
  constructor(props) {
	
	super(props);

	this.toggleTab = this.toggleTab.bind(this);
	this.toggleNav = this.toggleNav.bind(this);
	
	this.state = {
	  activeTab: '1',
	  isOpen: false
	};
  }

  toggleTab(tab) {
	
	if (this.state.activeTab !== tab) {
	  this.setState({
		activeTab: tab
	  });
	}
  }

  toggleNav() {
    
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
	return (
	  <div>
		<Container>
			<Navbar color="primary" dark expand="md" fixed="top">
	          <NavbarBrand href="/">Bookmark</NavbarBrand>
	          <NavbarToggler onClick={this.toggle} />
	          <Collapse isOpen={this.state.isOpen} navbar>
	            <Nav className="ml-auto" navbar>
	              <NavItem>
	                <NavLink href="/about">About </NavLink>
	              </NavItem>
	              <UncontrolledDropdown nav inNavbar>
	                <DropdownToggle nav caret>
	                  Hi, kshirish
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
	            </Nav>
	          </Collapse>
	        </Navbar>
			<Row>
				<Col sm="12" md={{ size: 8, offset: 2 }}>
					<Nav tabs>
					  <NavItem>
						<NavLink className={classnames({ active: this.state.activeTab === '1' })} 
						  onClick={() => { this.toggle('1'); }} >
						  Log in
						</NavLink>
					  </NavItem>
					  <NavItem>
						<NavLink className={classnames({ active: this.state.activeTab === '2' })}
						  onClick={() => { this.toggle('2'); }} >
						  Sign up
						</NavLink>
					  </NavItem>
					</Nav>
					<TabContent activeTab={this.state.activeTab}>
					  <TabPane tabId="1">
						<Row>
						  <Col sm="12">
							<Form>
					        <FormGroup>
					          <Label for="exampleEmail">Email</Label>
					          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
					        </FormGroup>
					        <FormGroup>
					          <Label for="examplePassword">Password</Label>
					          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
					        </FormGroup>
			                <Button color="primary">Log in</Button>{' '} <Button color="link" onClick={() => { this.toggle('2'); }}>Create an account</Button>
					       </Form>
						  </Col>
						</Row>
					  </TabPane>
					  <TabPane tabId="2">
						<Row>
						  <Col sm="12">
							<Form>
					        <FormGroup>
					          <Label for="exampleEmail">Email</Label>
					          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
					        </FormGroup>
					        <FormGroup>
					          <Label for="examplePassword">Password</Label>
					          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
					        </FormGroup>
					        <Button outline color="primary">Sign up</Button>
					       </Form>
						  </Col>
						</Row>
					  </TabPane>
					</TabContent>
				</Col>
			</Row>	
		</Container>			        
	  </div>
	);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
