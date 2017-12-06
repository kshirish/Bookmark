import React from 'react';

import { Form, FormGroup, Input, Row, Col } from 'reactstrap';  

const Sort = ({searchTxt, sortBy}) => (
	<Form>
		<Row>
			<Col sm="8">
			    <FormGroup>
			      <Input type="text" name="search" placeholder="Search by text" value={searchTxt}/>
			    </FormGroup>
		    </Col>
		    <Col sm="4">
			    <FormGroup>
			      <Input type="select" name="select" value={sortBy}>
			      	<option value="" disabled>Sort by:</option>	
			        <option value="title">Title</option>
			        <option value="date">Date</option>
			      </Input>
			    </FormGroup>
		    </Col>
	    </Row>
	</Form>    
);

export default Sort;