import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Provider store={store}>
		<BrowserRouter>
	    	<App />
	  	</BrowserRouter>
	</Provider>
, document.getElementById('root'));

registerServiceWorker();
