import React, {Component} from 'react'
import { Message, Icon, Grid, Input, Label, Button, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { cmd,start,stop } from '../../actions/cmd'

@connect()
export default class Dashboard extends Component {

	constructor(props){
		super(props)
		this.state = {
			command : '',
			visible : true,
		}
	}
	componentDidMount(){
		setTimeout(() => {
      		this.setState({ visible: false })
    	}, 10000)
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
	dismiss(e){
		this.setState({ visible: false })
	}

	render(){
		return <div>

			<Message info style={{display:this.state.visible?'block':'none'}}
				onDismiss={this.dismiss.bind(this)} >
				<i>connect n1z.pt ; password sexoanal</i>
			</Message>
			<br />

			<Input size='huge' fluid action labelPosition='right' value={this.state.command} onKeyPress={this.keypress.bind(this)} onChange={this.change.bind(this)} placeholder='Custom command...' >
				<Label basic> > </Label>
				<input ref={(e)=>{ this.input = e}} />
				<Button onClick={this.submit.bind(this)} primary type='submit'>OK</Button>
			</Input>

			<br /><br /><br />

			<div className='cmd_buttons'>

			<Button size='huge' color='grey' onClick={this.change.bind(this,'exec gamemode_competitive.cfg; game_type 0; game_mode 1')} content='Competitive' />
			<Button size='huge' color='grey' onClick={this.change.bind(this,'exec gamemode_casual.cfg; game_type 0; game_mode 0')} content='Casual' />
			<Button size='huge' color='grey' onClick={this.change.bind(this,'exec gamemode_deathmatch.cfg; game_type 1; game_mode 2')} content='Deathmatch' />

			<Divider />

			<Button size='small' onClick={this.change.bind(this,'exec esl1on1aim.cfg')} content='esl1on1aim' />
			<Button size='small' onClick={this.change.bind(this,'exec esl1on1awp.cfg')} content='esl1on1awp' />
			<Button size='small' onClick={this.change.bind(this,'exec esl1on1.cfg')} content='esl1on1' />
			<Button size='small' onClick={this.change.bind(this,'exec esl1on1hg.cfg')} content='esl1on1hg' />
			<Button size='small' onClick={this.change.bind(this,'exec esl1on1ka.cfg')} content='esl1on1ka' />
			<Button size='small' onClick={this.change.bind(this,'exec esl2on2aim.cfg')} content='esl2on2aim' />
			<Button size='small' onClick={this.change.bind(this,'exec esl2on2awp.cfg')} content='esl2on2awp' />
			<Button size='small' onClick={this.change.bind(this,'exec esl2on2hg.cfg')} content='esl2on2hg' />
			<Button size='small' onClick={this.change.bind(this,'exec esl3on3.cfg')} content='esl3on3' />
			<Button size='small' onClick={this.change.bind(this,'exec esl5on5.cfg')} content='esl5on5' />

			<Divider />

			<Button size='large' primary onClick={this.change.bind(this,'changelevel de_')} content='Change map' />
			<Button size='large' basic color='blue' onClick={this.change.bind(this,'changelevel de_dust2')} content='Dust2' />
			<Button size='large' basic color='blue' onClick={this.change.bind(this,'changelevel de_inferno')} content='Inferno' />
			<Button size='large' basic color='blue' onClick={this.change.bind(this,'changelevel de_mirage')} content='Mirage' />
			<Button size='large' basic color='blue' onClick={this.change.bind(this,'changelevel de_cache')} content='Cache' />
			<Button size='large' basic color='blue' onClick={this.change.bind(this,'changelevel de_overpass')} content='Overpass' />

			<br /><br />

			<Button size='large' primary onClick={this.change.bind(this,'host_workshop_map ')} content='Workshop map' />
			<Button size='large' basic color='blue' onClick={this.change.bind(this,'host_workshop_map 530892052')} content='aim_map_csgo' />
			<Button size='large' basic color='blue' onClick={this.change.bind(this,'host_workshop_map 243702660')} content='aim_botz' />
			<Button size='large' basic color='blue' onClick={this.change.bind(this,'host_workshop_map 122443683')} content='aim_map' />
			<Button size='large' basic color='blue' onClick={this.change.bind(this,'host_workshop_map 574004646')} content='aim_dimension' />

			<Divider />

			<br /><br />

			<Button icon='pause' color='yellow' size='small' onClick={this.change.bind(this,'mp_pause_match')} content='Pause' />
			<Button icon='play' color='green' size='small' onClick={this.change.bind(this,'mp_unpause_match')} content='Resume' />
			<Button icon='repeat' size='small' color='red' onClick={this.change.bind(this,'mp_restartgame 1')} content='Restart game' />
			<Button icon='remove user' size='small' color='black' onClick={this.change.bind(this,'bot_kick all')} content='Kick bots' />
			<Button icon='time' size='small' color='violet' onClick={this.change.bind(this,'mp_warmup_end 1')} content='End warm up' />
			<Button icon='fa' size='small' color='blue' onClick={this.change.bind(this,'mp_warmuptime 9999999')} content='Infinite warm up' />
			<Button icon='hourglass full' size='small' color='brown' onClick={this.change.bind(this,'mp_freezetime 0')} content='Freezetime' />
			<Button icon='tasks' size='small' color='grey' onClick={this.change.bind(this,'mp_maxrounds 30')} content='Max rounds' />

			<br /><br /><br />



			<Button size='small' color='orange' onClick={this.change.bind(this,'sv_cheats 1')} content='Server cheats' />
			<Button size='small' onClick={this.change.bind(this,'mp_free_armor 1')} content='Free armor' />
			<Button size='small' onClick={this.change.bind(this,'sv_infinite_ammo 1')} content='Infinite ammo' />
			<Button size='small' onClick={this.change.bind(this,'sv_infinite_ammo 2')} content='Infinite nades/clips' />
			<Button size='small' onClick={this.change.bind(this,'mp_maxmoney 65535; mp_startmoney 65535;')} content='Infinite money' />
			<Button size='small' onClick={this.change.bind(this,'mp_buy_anywhere 1 ; mp_buytime 9999')} content='Buy anywhere/anytime' />

			<br /><br />

			<Button size='small' onClick={this.change.bind(this,'mp_friendlyfire 0')} content='Friendly fire' />
			<Button size='small' onClick={this.change.bind(this,'sv_grenade_trajectory 1')} content='Grenade trajectory' />
			<Button size='small' onClick={this.change.bind(this,'sv_grenade_trajectory_time 10')} content='Grenade trajectory time' />
			<Button size='small' onClick={this.change.bind(this,'sv_showimpacts 1')} content='Show impacts' />

			<br /><br /><br />

			</div>
		</div>
	}
}
