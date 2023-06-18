import axios from 'axios'

export const fetchUsers = () => {
    return async(dispatch)=> {
        try {
            dispatch({type: 'GET_USERS_INIT'})
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({type: 'GET_USERS_SUCCESS', payload: res.data})
        } catch (error) {
            dispatch({type: 'GET_USER_ERROR', error})
        }
    }
}