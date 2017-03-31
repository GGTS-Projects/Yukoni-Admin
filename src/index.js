import React from 'react';
import ReactDom from 'react-dom';
import routes from './routes.js';
import { browserHistory, Router } from 'react-router';

ReactDom.render((
<Router history={browserHistory} routes={routes} />), document.getElementById('root'));