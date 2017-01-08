import axios from 'axios'

export function fetchUser(){

    return (dispatch)=>{
		dispatch({type: "FETCHING_USER"})
        axios.get('/api/me')
            .then((response)=>{
				let res = response.data
                dispatch({type: "FETCH_USER_FULFILLED", payload: res})
            })
            .catch((err)=>{
                dispatch({type: "FETCH_USER_REJECTED", payload: err})
            })
    }
}
