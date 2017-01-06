export default function reducer(state={
	sending: false,
	error: false,
}, action){

    if(action.type === "SENDING_COMMAND")
        return {...state, sending: true, error : false }
    if(action.type === "COMMAND_EXECUTED_SUCCESSFULLY")
        return {...state, error : false, sending : false }
    if(action.type === "COMMAND_NOT_EXECUTED")
        return {...state, sending: false, error: action.payload}

    return state
}
