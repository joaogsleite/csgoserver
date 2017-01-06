import React, {Component} from 'react'
import { Container, Menu, Grid, Icon } from 'semantic-ui-react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

export default class Navbar extends Component {

	constructor(props){
		super(props)
		this.state = {
			hidden : this.isMobile(),
			mobile : this.isMobile()
		}
		this.menu = [
			{ label: 'Dashboard',	path: '/' },
		]
	}
	go(path){
		browserHistory.push(path)
		if(this.state.mobile) this.setState({hidden:true})
	}
	toggleMenu(){
		this.setState({ hidden : !this.state.hidden })
	}
	isMobile(){
		return window.innerWidth < 770
	}
	componentDidMount(){
		window.addEventListener('resize',()=>{
			this.setState({
				mobile: this.isMobile(),
				hidden: this.isMobile()
			})
		})
	}

	render(){

		let logo = <span style={{fontWeight:'bold'}}>CSGO</span>

		let items = this.menu.map((i)=>{
			return <Menu.Item key={i.path} content={i.label} onClick={this.go.bind(this,i.path)} />
		})

		return <Menu fixed='top' size='massive' stackable>
			<Menu.Item
				style={{display:this.state.mobile?'block':'none'}}
				onClick={this.toggleMenu.bind(this)} >
				<Icon style={{marginRight:17}} name='align justify' />
				{logo}
			</Menu.Item>
			<Menu.Item style={{display:this.state.mobile?'none':'block'}}>
				{logo}
			</Menu.Item>
			{this.state.hidden?'':items}
		</Menu>

	}
}
