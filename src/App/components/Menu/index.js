import React, { Component } from 'react';

import { Menu, Icon } from 'antd';
import { NavLink, Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu

class Menus extends Component {

	state = {
		theme: 'dark',
		current: '1'
	}

	handleClick = e => {
		this.setState({
			current: e.key
		})
	}

	render() {
		return <div>
	        <Menu
	          theme="Light"
	          onClick={this.handleClick}
	          style={{ width: 256 }}
	          defaultOpenKeys={['sub1']}
	          selectedKeys={[this.state.current]}
	          mode="inline"
	        >
	          <SubMenu
	            key="sub1"
	            title={
	              <span>
	                <Icon type="mail" />
	                <span>Contex</span>
	              </span>
	            }
	          >
	            <Menu.Item key="1"><Link to="/context">Init</Link></Menu.Item>
	            <Menu.Item key="2"><Link to="/test">Test2</Link></Menu.Item>
	            <Menu.Item key="3">Option 3</Menu.Item>
	            <Menu.Item key="4">Option 4</Menu.Item>
	          </SubMenu>
	        </Menu>


		</div>
	}
}

export default Menus
