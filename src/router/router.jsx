import React, { Component } from 'react';
import { Router, BrowserRouter, Route, Link } from 'react-router-dom';
import Front from 'module/front/front.jsx';
import Admin from 'module/admin/admin.jsx'
import detail from 'front_page/blog-detail/blogDetail.jsx'

class RouterMap extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route path="/" exact component={Front}></Route>
					<Route path="/detail" component={detail}></Route>
					<Route path="/admin" component={Admin}></Route>
				</div>
			</BrowserRouter>
		)
	}
}

export default RouterMap;