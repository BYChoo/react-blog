import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Front from 'module/front/front.jsx';
import Admin from 'module/admin/admin.jsx'

class RouterMap extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route path="/" exact component={Front}></Route>
					<Route path="/admin" component={Admin}></Route>
				</div>
			</BrowserRouter>
		)
	}
}

export default RouterMap;