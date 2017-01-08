export default function reducer(state={
	user : {
		name : null,
		username : null,
		email : null,
		photo : {
			type : null,
			data : null,
			url : null
		}
	},
    fetching: false,
    fetched: false,
	error: null
}, action){

    if(action.type === "FETCHING_USER")
        return {...state, fetching: true}
    if(action.type === "FETCH_USER_FULFILLED")
        return {
            ...state,
            user : action.payload,
            fetching: false,
            fetched: true,
            error: null
        }
    if(action.type === "FETCH_USER_REJECTED")
        return {...state, fetching: false, error: action.payload}

    return state
}
