import React, { Component } from 'react';
import Context from '../config';


export default class Child extends Component {
	state = {
		count: 0
	}


	handleClick = () => {
		this.setState(state => ({
			count: state.count + 1
		}))
	}

	render() {
		console.log('dabigerender')
		return <Context.Consumer>
			{
				val => <div onClick={this.handleClick}> { this.state.count }: { val.name }</div>
			}
		</Context.Consumer>
	}
}
