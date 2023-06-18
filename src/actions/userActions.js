import axios from 'axios'

export const fetchUsers = () => {
    return async(dispatch)=> {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log('res: ', res)
            dispatch({type: 'GET_USERS', payload: res.data})
        } catch (error) {
            dispatch({type: 'GET_USER', error})
        }
    }
}