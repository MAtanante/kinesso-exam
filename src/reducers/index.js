const initState = {
    users: []
}


const rootReducer = (state = initState, action)=> {
    console.log('action: ', action)

    if(action.type === 'GET_USERS') {
        return {
            ...state,
            users: action.payload
        }
    }

    return state
}

export default rootReducer