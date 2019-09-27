import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Menus from './components/Menu';
import 'antd/dist/antd.css';

import './style.scss';

function App() {
  return (
  	<BrowserRouter>
		<div className="app">
			<div className="content">
				<Menus />
				<div className="content-wrap">
					<Switch>
						<Route exact path="/" component={() => <div>home</div>}/>
						<Route path="/context" component={() => <div>test</div>} />
						<Route path="/test" component={() => <div>test2</div>} />
						<Redirect to="/" />
					</Switch>
				</div>
			</div>
		</div>
	</BrowserRouter>
  );
}

export default App;
