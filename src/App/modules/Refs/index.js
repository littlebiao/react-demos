import React, { Component } from 'react';
import { Input, Button } from 'antd';
import './style.scss';

function CustomText(props) {

	return <div>
		<Input ref={props.inputRef} />
	</div>
}

function CustomText2(props) {
	return <div>
		<Input ref={props.inputRef} />
	</div>
}


export default class RefsTest extends Component{
	textInput = React.createRef()

	handleClick = () => {
		// this.inputRef.focus()
		this.textInput.current.focus()
	}


	render() {
		return <div className="refs">
			<CustomText  inputRef={ el => this.inputRef = el }/>
			<Button type="primary" onClick={this.handleClick}>Focus</Button>

			<CustomText2  inputRef={ this.textInput } />

		</div>
	}

}
