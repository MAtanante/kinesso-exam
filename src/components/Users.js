import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchUsers} from '../actions/user'
import UserCard from "./UserCard"


const Users =()=> {
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchUsers())
    }, [dispatch])

    const users = useSelector(state => state.users)
    const usersStatus = useSelector(state => state.usersStatus)

    return <>
        <h1 className='font-bold my-8 '>USERS</h1>

        <div className='flex justify-center'>
        <div className='flex flex-wrap'>
            {usersStatus === 'loading' &&  <div>Loading</div>}
            {usersStatus === 'ok' && users && users.length > 0 && <>
            {users.map(user => (
                <UserCard 
                    key={user.id}
                    user={user} 
                    onUserDelete={(id)=> dispatch({type:'DELETE_USER', payload: id})}
                />
            ))}
            </>}
        </div>
        </div>
    </>
}

export default Users