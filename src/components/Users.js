import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchUsers} from '../actions/user'
import Mail from '../components/icons/Mail'
import Telephone from '../components/icons/Telephone'
import Trash from '../components/icons/Trash'

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
                <div className='group transition-all scale-95 hover:scale-105 hover:z-10 hover:bg-gray-100 hover:drop-shadow-lg relative px-2 py-1 rounded border flex flex-col shrink-0 basis-1/3' key={user.id}>
                    <h5 className="text-xl mb-3">{user.name}</h5>
                    <div className="flex text-sm text-gray-500">
                        <Mail/>
                        <span className="ml-2">{user.email}</span>
                    </div>
                    <div className="flex text-sm text-gray-500">
                        <Telephone/>
                        <span className="ml-2">{user.phone}</span>
                    </div>
                    

                    <button 
                        className="transition-all bg-gray-300 text-red-500 rounded-full p-2 absolute right-1 top-1 hidden opacity-0 group-hover:block group-hover:opacity-100 hover:scale-105" 
                        onClick={()=> dispatch({type:'DELETE_USER', payload: user.id})}
                    >
                        <Trash/>
                    </button>
                </div>
            )}
            </>}
        </div>
        </div>
    </>
}

export default Users