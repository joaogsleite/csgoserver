import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Container, Menu } from 'semantic-ui-react'

import Navbar from './Navbar'

@connect()
export default class App extends Component {

	constructor(props){
		super(props)
	}
	render(){
		return <div>
			<Navbar />
			<Container style={{marginTop:70}}>
				{this.props.children}
			</Container>
		</div>
	}
}
