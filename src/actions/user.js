import axios from 'axios'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = () => {
    return async(dispatch)=> {
        try {
            dispatch({type: 'GET_USERS_INIT'})
            const res = await axios.get(USERS_URL)
            dispatch({type: 'GET_USERS_SUCCESS', payload: res.data})
        } catch (error) {
            dispatch({type: 'GET_USER_ERROR', error})
        }
    }
}