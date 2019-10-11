import React, { Component, Suspense } from 'react';
import Context from './config';
import { Input } from 'antd';
import ConsumerChild from './ConsumerChild';
import './style.scss'

// import ContextType from './ContextType';
// 

const ContextType = React.lazy(() => import('./ContextType'));


class TestContext extends Component {
	state = {
		context: { name: 'haoba' }
	}

	handleInputChange = (e) => {
		this.setState({
			context: { name: e.target.value }
		})
	}

	render() {
		return <div className="context">
			<Input  onChange={this.handleInputChange} />
			<Context.Provider value={this.state.context}>
				<ConsumerChild />
				<Suspense fallback={<div>Loading...</div>}>
					<ContextType />
				</Suspense>
			</Context.Provider>
		</div>
	}
}

export default TestContext;
