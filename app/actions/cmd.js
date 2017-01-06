import axios from 'axios'

export function cmd(command){

    return (dispatch)=>{
		dispatch({type: "SENDING_COMMAND"})
        axios.get('/api/cmd/'+command)
            .then((res)=>{
                dispatch({type: "COMMAND_EXECUTED_SUCCESSFULLY"})
            })
            .catch((err)=>{
                dispatch({type: "COMMAND_NOT_EXECUTED", payload: err})
            })
    }
}
export function start(){
    return (dispatch)=>{
		dispatch({type: "SERVER_STARTED"})
        axios.get('/api/start')
            .then((res)=>{ })
            .catch((err)=>{ })
    }
}
export function stop(){
    return (dispatch)=>{
		dispatch({type: "SERVER_STOPED"})
        axios.get('/api/stop')
            .then((res)=>{ })
            .catch((err)=>{ })
    }
}
