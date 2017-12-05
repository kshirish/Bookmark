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

import { Form, FormGroup, Label, Input, FormText, Container, Row, Col, 
	Card, CardTitle, CardSubtitle, CardBody, CardText, CardImg, CardColumns,
	Collapse, Navbar, NavbarToggler, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, 
	TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';  

class App extends React.Component {
   
   constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
	return (
	  <div>
		<Container>			
			<Navbar color="success" dark expand="md" fixed="top">
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
				<Col sm="12" md="3">
					<Form>
						<FormGroup tag="fieldset">
	          				<legend>Tags</legend>
							<FormGroup check>
					          <Label check>
					            <Input type="checkbox" />{' '}
					            tag1
					          </Label>
					        </FormGroup>
					        <FormGroup check>
					          <Label check>
					            <Input type="checkbox" />{' '}
					            tag2
					          </Label>
					        </FormGroup>
					        <FormGroup check>
					          <Label check>
					            <Input type="checkbox" />{' '}
					            tag3
					          </Label>
					        </FormGroup>
					        <FormGroup check>
					          <Label check>
					            <Input type="checkbox" />{' '}
					            tag4
					          </Label>
					        </FormGroup>
				        </FormGroup>
						<FormGroup tag="fieldset">
	          				<legend>Ratings</legend>
					        <FormGroup check>
				              <Label check>
				                <Input type="radio" name="rating" />{' '}
				                	Ok
				              </Label>
				            </FormGroup>
				            <FormGroup check>
				              <Label check>
				                <Input type="radio" name="rating" />{' '}
				                	Good
				              </Label>
				            </FormGroup>
				            <FormGroup check>
				              <Label check>
				                <Input type="radio" name="rating" />{' '}
				                	Useful
				              </Label>
				            </FormGroup>
				            <FormGroup check>
				              <Label check>
				                <Input type="radio" name="rating" />{' '}
				                	Must
				              </Label>
				            </FormGroup>
				        </FormGroup>    
				      </Form>
				</Col>
				<Col sm="12" md="9">
					<Row>
						<Col md="12">
							<Form>
								<Row>
								<Col sm="8">
						        <FormGroup>
						          <Label for="exampleEmail">Search by text</Label>
						          <Input type="text" name="search" id="exampleEmail" placeholder="Enter text" />
						        </FormGroup>
						        </Col>
						        <Col sm="4">
						        <FormGroup>
						          <Label for="exampleSelect">Sort by</Label>
						          <Input type="select" name="select" id="exampleSelect">
						            <option>Title</option>
						            <option>Date</option>
						          </Input>
						        </FormGroup>
						        </Col>
						        </Row>
						    </Form>    
						</Col>    
						<Col md="12">
							<CardColumns>
						      <Card>
						        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
						        <CardBody>
						          <CardTitle>Card title</CardTitle>
						          <CardSubtitle>Card subtitle</CardSubtitle>
						          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
						          <Button>Button</Button>
						        </CardBody>
						      </Card>
						      <Card>
						        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
						        <CardBody>
						          <CardTitle>Card title</CardTitle>
						          <CardSubtitle>Card subtitle</CardSubtitle>
						          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
						          <Button>Button</Button>
						        </CardBody>
						      </Card>
						      <Card>
						        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
						        <CardBody>
						          <CardTitle>Card title</CardTitle>
						          <CardSubtitle>Card subtitle</CardSubtitle>
						          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
						          <Button>Button</Button>
						        </CardBody>
						      </Card>
						      <Card>
						        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
						        <CardBody>
						          <CardTitle>Card title</CardTitle>
						          <CardSubtitle>Card subtitle</CardSubtitle>
						          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
						          <Button>Button</Button>
						        </CardBody>
						      </Card>
						      <Card>
						        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
						        <CardBody>
						          <CardTitle>Card title</CardTitle>
						          <CardSubtitle>Card subtitle</CardSubtitle>
						          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
						          <Button>Button</Button>
						        </CardBody>
						      </Card>
						      <Card>
						        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
						        <CardBody>
						          <CardTitle>Card title</CardTitle>
						          <CardSubtitle>Card subtitle</CardSubtitle>
						          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
						          <Button>Button</Button>
						        </CardBody>
						      </Card>
						      <Card>
						        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
						        <CardBody>
						          <CardTitle>Card title</CardTitle>
						          <CardSubtitle>Card subtitle</CardSubtitle>
						          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
						          <Button>Button</Button>
						        </CardBody>
						      </Card>
						    </CardColumns>						
						</Col>
					</Row>    
				</Col>
			</Row>	
		</Container>			        
	  </div>
	);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
