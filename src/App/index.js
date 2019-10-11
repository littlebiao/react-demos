import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Menus from './components/Menu';
import 'antd/dist/antd.css';

import TestContext from './modules/Context'
import Refs from './modules/Refs'

import './style.scss';

function App() {
  return (
  	<BrowserRouter>
		<div className="app">
			<div className="content">
				<Menus />
				<div className="content-wrap">
					<Switch>
						<Route exact path="/" component={() => <div style={{ textAlign: 'center', fontSize: 32 }}>Welcom</div>}/>
						<Route exact path="/context" component={TestContext} />
						<Route exact path="/refs" component={Refs} />

						<Redirect to="/" />
					</Switch>
				</div>
			</div>
		</div>
	</BrowserRouter>
  );
}

export default App;
