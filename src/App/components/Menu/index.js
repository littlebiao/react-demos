import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menus extends Component {
	render() {
		return <div>
			<ul className="ant-menu ant-menu-light ant-menu-root ant-menu-inline" style={{ width: 200 }}>
	            <NavLink exact to="/context" className="ant-menu-item" activeClassName="ant-menu-item-selected">Context</NavLink>
	            <NavLink exact to="/refs" className="ant-menu-item" activeClassName="ant-menu-item-selected">Refs</NavLink>

	        </ul>
		</div>
	}
}

export default Menus

//  ant-menu-item ant-menu-item-selected