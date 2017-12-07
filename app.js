const express 	= require('express');
const methodOverride = require('method-override');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const mongoose    = require('mongoose');
const app         = express();

const router = express.Router(); 
const config = require('./config');
const port = process.env.PORT || 8080;

mongoose.connect(config.database);

app.set('superSecret', config.secret);
app.set('view engine', 'ejs')

app.use(bodyParser.json());	// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));	// parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override'));	// simulate PUT and DELETE
app.use(express.static(`${__dirname}/build`));	// static files
app.use(morgan('dev'));
app.use('/api/v1', router);

require('./routes/authentication')(router, app);
require('./routes/middlewares')(router, app);
require('./routes/user')(router);
require('./routes/item')(router);
require('./routes/views')(app);

// catch all
app.get('*', (req, res) => {
	res.json({ message: 'Leave me alone.' });
});

app.listen(port, () => console.log(`Listening to port - ${port}`));
