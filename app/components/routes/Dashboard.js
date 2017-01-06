import React, {Component} from 'react'
import { Input, Label, Button, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { cmd,start,stop } from '../../actions/cmd'

@connect()
export default class Dashboard extends Component {

	constructor(props){
		super(props)
		this.state = {
			command : '',
		}
	}

	change(e){
		let command = e.target.value
		this.setState({command})
	}
	keypress(e){
		if(e.key === 'Enter')
			this.submit(e)
	}
	submit(e){
		this.props.dispatch(cmd(this.state.command))
		this.setState({command:''})
	}
	start(e){
		this.props.dispatch(start())
	}
	stop(e){
		this.props.dispatch(stop())
	}

	render(){
		return <div>

			<Button onClick={this.start.bind(this)} color='green' content='Start server' icon='play' />
			<Button onClick={this.stop.bind(this)} color='red' content='Stop server' icon='stop' />

			<Divider />

			<Input fluid action labelPosition='right' value={this.state.command} onKeyPress={this.keypress.bind(this)} onChange={this.change.bind(this)} placeholder='Custom command...' >
				<Label basic> >>> </Label>
				<input />
				<Button onClick={this.submit.bind(this)} primary type='submit'>Submit</Button>
			</Input>
		</div>
	}
}
