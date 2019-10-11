import React, { Component } from 'react';
import Context from '../config';

export default class ContextTypeTest extends Component {
	static contextType = Context;

	render() {
		return <div>
			<p>ContextType Test</p>
			<div>{ this.context.name }</div>
		</div>
	}

}

// ContextTypeTest.contextType = Context