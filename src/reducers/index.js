const initState = {
    users: [],
    usersStatus: 'idle'
}


const rootReducer = (state = initState, action)=> {
    console.log('action: ', action)

    if(action.type === 'GET_USERS_INIT') {
        return {
            ...state,
            usersStatus: 'loading'
        }
    }

    if(action.type === 'GET_USERS_SUCCESS') {
        return {
            ...state,
            usersStatus: 'ok',
            users: action.payload
        }
    }

    if(action.type === 'GET_USERS_ERROR') {
        return {
            ...state,
            usersStatus: 'error',
            users: action.payload
        }
    }

    return state
}

export default rootReducer