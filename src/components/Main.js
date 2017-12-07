import React from 'react';
import Filters from './Filters';
import Sort from './Sort';
import { fetchListApi, fetchFiltersApi } from '../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Container, Row, Col, Badge, Button } from 'reactstrap';  


class Main extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.dispatch(fetchListApi(this.props.userId, this.props.isLoggedIn));
		this.props.dispatch(fetchFiltersApi(this.props.isLoggedIn));
	}

	componentDidMount() {
	}

	componentDidUpdate(prevProps) {			
	}

	render() {
		
		const { tags, ratings, searchTxt, sortBy, list, isLoggedIn } = this.props;

		if(!isLoggedIn)
			return <Redirect to="/login"/>;

		const itemsEl = list.map(function(item, i) {
			
			const tagsEl = item.tags.map(function(tag, i) {
				return <Badge key={i} color="dark">{tag}</Badge>
			});

			return	<Row key={i} className="item">
				<Col sm="4">
					<img width="100%" src={item.metaImage} alt={item.metaTitle} />
				</Col>
				<Col sm="8">
					<h4>{item.metaTitle}</h4>
					<p>{item.metaDescription}</p>
					<div className="badge-container">{tagsEl}</div>
					<Button tag="a" outline size="sm" color="primary" rel="noopener noreferrer" target="_blank" href={item.link}>Read More</Button>
				</Col>
			</Row>	
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
							{itemsEl}
						</Col>
					</Row>
				</Col>
			</Row>	
		</Container>
	}
}

const mapStateToProps = function(state) {
	
	return {
		tags: state.filters.tags, 
		ratings: state.filters.ratings, 
		searchTxt: state.sort.searchTxt, 
		sortBy: state.sort.sortBy, 
		list: state.list.list,
		isLoggedIn: state.logged.token,
		userId: state.logged.user && state.logged.user._id
	}
};

export default connect(
  mapStateToProps
)(Main);

