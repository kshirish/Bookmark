import React from 'react';

import Filters from './Filters';
import Sort from './Sort';
import { connect } from 'react-redux';

import { Container, Row, Col, Card, CardTitle, CardBody, 
	CardText, CardImg, CardColumns, Badge } from 'reactstrap';  


const Main = ({tags, ratings, searchTxt, sortBy, list}) => {

	const cardsEl = list.map(function(item, i) {
		
		const tagsEl = item.tags.map(function(tag, i) {
			return <Badge color="dark">{tag}</Badge>
		});

		return	<Card key={i}>
			<CardImg top width="100%" src={item.metaImage} alt={item.metaTitle} />
			<CardBody>
				<CardTitle>{item.metaTitle}</CardTitle>
				<CardText>{item.metaDescription}</CardText>
				<div className="badge-container">{tagsEl}</div>
				<a href={item.link}>See link</a>
			</CardBody>
		</Card>
	});

	return <Container>			
		<Row>
			<Col sm="12" md="3">
				<Filters tags={tags} ratings={ratings}/>
			</Col>
			<Col sm="12" md="9">
				<Row>
					<Col md="12">
						<Sort searchTxt={searchTxt} sortBy={sortBy}/>
					</Col>    
					<Col md="12">
						<CardColumns>
							{cardsEl}
						</CardColumns>						
					</Col>
				</Row>
			</Col>
		</Row>	
	</Container>
};

const mapStateToProps = function(state) {
	
	return {
		tags: state.filters.tags, 
		ratings: state.filters.ratings, 
		searchTxt: state.sort.searchTxt, 
		sortBy: state.sort.sortBy, 
		list: state.list
	}
};

const mapDispatchToProps = function(dispatch) {
	return {
	};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

