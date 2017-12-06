import React from 'react';

import { Form, FormGroup, Label, Input } from 'reactstrap';  

const Filters = ({tags, ratings}) => {

	const tagsEl = tags.map(function(tag, i) {		
		
		return <FormGroup check key={i}>
			<Label check>
				<Input name="tag" type="checkbox" value={tag} />{' ' + tag} 			
			</Label>
		</FormGroup>;
	});

	const ratingsEl = ratings.map(function(rating, i) {

		return <FormGroup check key={i}>
			<Label check>
				<Input type="radio" name="rating" value={rating} />{' ' + rating}			
			</Label>
		</FormGroup>
	});

  return <Form>
			<FormGroup tag="fieldset">
				<legend>Tags</legend>
					{tagsEl}
			</FormGroup>
			<FormGroup tag="fieldset">
				<legend>Ratings</legend>
					{ratingsEl}
			</FormGroup>    
		</Form>
};

export default Filters;