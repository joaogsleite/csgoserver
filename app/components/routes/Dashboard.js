import React, {Component} from 'react'
import { Grid, Input, Label, Button, Divider } from 'semantic-ui-react'
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
		let command = e.target?e.target.value:e
		this.setState({command})
		this.input.focus()
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

			<Button style={{float:'right'}} onClick={this.stop.bind(this)} color='red' content='Stop server' icon='stop' />

			<br /><br />

			<Input size='huge' fluid action labelPosition='right' value={this.state.command} onKeyPress={this.keypress.bind(this)} onChange={this.change.bind(this)} placeholder='Custom command...' >
				<Label basic> > </Label>
				<input ref={(e)=>{ this.input = e}} />
				<Button onClick={this.submit.bind(this)} primary type='submit'>OK</Button>
			</Input>

			<br /><br /><br />

			<Button primary onClick={this.change.bind(this,'changelevel de_')} content='Change map' />
			<Button onClick={this.change.bind(this,'changelevel de_dust2')} content='Dust2' />
			<Button onClick={this.change.bind(this,'changelevel de_inferno')} content='Inferno' />
			<Button onClick={this.change.bind(this,'changelevel de_mirage')} content='Mirage' />
			<Button onClick={this.change.bind(this,'changelevel de_cache')} content='Cache' />

			<Divider />

			<Button onClick={this.change.bind(this,'mp_restart 1')} content='Restart match' />
			<Button onClick={this.change.bind(this,'mp_restartround 1')} content='Restart round' />
			<Button onClick={this.change.bind(this,'bot_kick 1')} content='Kick bots' />
			<Button onClick={this.change.bind(this,'mp_warmup_end 1')} content='End warm up' />
			<Button onClick={this.change.bind(this,'mp_freezetime 0')} content='Freezetime' />

			<Divider />

			<Button color='orange' onClick={this.change.bind(this,'sv_cheats 1')} content='Server cheats' />
			<Button onClick={this.change.bind(this,'sv_infinite_ammo 1')} content='Infinite ammo' />
			<Button onClick={this.change.bind(this,'sv_infinite_ammo 2')} content='Infinite nades/clips' />
			<Button onClick={this.change.bind(this,'give weapon_smokegrenade ; give weapon_hegrenade ; give weapon_molotov ; give weapon_flashbang')} content='Give nades' />
			<Button onClick={this.change.bind(this,'mp_buy_anywhere 1')} content='Buy anywhere' />
			<Button onClick={this.change.bind(this,'mp_buytime 9999')} content='Buy anytime' />

			<Divider />

			<Button onClick={this.change.bind(this,'sv_grenade_trajectory 1')} content='Grenade trajectory' />
			<Button onClick={this.change.bind(this,'sv_grenade_trajectory_time 10')} content='Grenade trajectory time' />
			<Button onClick={this.change.bind(this,'sv_showimpacts 1')} content='Show impacts' />

			<Divider />

			<Button onClick={this.change.bind(this,'sv_showimpacts 1')} content='Show impacts' />
			<Button onClick={this.change.bind(this,'sv_showimpacts 1')} content='Show impacts' />
			<Button onClick={this.change.bind(this,'sv_showimpacts 1')} content='Show impacts' />
			<Button onClick={this.change.bind(this,'sv_showimpacts 1')} content='Show impacts' />


		</div>
	}
}
