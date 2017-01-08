import React, {Component} from 'react'
import { Container, Menu, Grid, Icon } from 'semantic-ui-react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

@connect((store)=>{
    return {
        login : store.user.fetched,
		user : store.user.user
    }
})
export default class Navbar extends Component {

	constructor(props){
		super(props)
		this.state = {
			hidden : this.isMobile(),
			mobile : this.isMobile()
		}
		this.menu = [
			{ label: 'Dashboard',	path: '/dashboard' },
			{ label: 'Workshop',	path: 'https://steamcommunity.com/workshop/browse/?appid=730' },
		]
	}
	go(path){
		if(path.includes('http')) window.open(path, '_blank')
		else if(path.includes('/logout') || path.includes('/auth')) window.location.href = path
		else browserHistory.push(path)
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

		let items = []
		if(this.props.login){
			items = this.menu.map((i)=>{
				return <Menu.Item key={i.path} content={i.label} onClick={this.go.bind(this,i.path)} />
			})
			items.push(<Menu.Item key='logout' content='Logout' onClick={this.go.bind(this,'/logout')} />)
		}
		else items.push(<Menu.Item key='login' content='Login' onClick={this.go.bind(this,'/auth/steam')} />)

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
			<Menu.Menu position='right'>
				<Menu.Item icon='user' key='profile' content={this.props.user.displayName} />
			</Menu.Menu>
		</Menu>

	}
}
