import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

import React from 'react';
import CustomNavbar from './CustomNavbar';
import Login from './Login';
import Main from './Main';
import About from './About';
import { Switch, Route } from 'react-router-dom';

import { Container } from 'reactstrap';

const App = () => (
  <div>
	<Container>
		<CustomNavbar />
		<main>
			<Switch>	
		    	<Route exact={true} path='/' component={Main}/>
		      	<Route path='/login' component={Login}/>
		      	<Route path='/about' component={About}/>
		    </Switch>  	
	  	</main>
	</Container>			        
  </div>
);

export default App;