import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchUsers} from '../actions/user'

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
            {users.map(user => 
                <div className='w-1/4 px-2 py-1 rounded border flex flex-col' key={user.id}>
                <span>{user.name}</span>
                <span>{user.email}</span>
                <span>{user.phone}</span>
                </div>
            )}
            </>}
        </div>
        </div>
    </>
}

export default Users