import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from "./pages/product";
import Graficos from "./pages/graficos";
import Register from "./pages/register";

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Main} />
			<Route path="/products/:id" component={Product} />
			<Route path="/register" component={Register} />
			<Route path="/graficos" component={Graficos} />
		</Switch>
	</BrowserRouter>
);

export default Routes;