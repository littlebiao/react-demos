import React, { Component } from 'react';
import Context from '../config';
import Child from './Child';

class ConsumerChild extends Component {
	state = {
		childContext: { name: 'dabige' }
	}


	componentWillReceiveProps(props, nextProps) {
		// console.log(props, nextProps)
	}

	componentDidMount(){
		console.log('didMount')
	}

	render() {
		console.log('child render')

		return <div>
			<Context.Consumer>
				{
					val => <div>{val.name}</div>
				}
			</Context.Consumer>
			<Context.Provider value={this.state.childContext}>
				<Child />
			</Context.Provider>
		</div>
	}
}

export default ConsumerChild