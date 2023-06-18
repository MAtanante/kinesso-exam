import Mail from './icons/Mail'
import Telephone from './icons/Telephone'
import Trash from './icons/Trash'

const UserCard = ({user = {}, onUserDelete})=> {
    return (
        <div className='group px-4 py-2 transition-all scale-95 hover:scale-105 hover:z-10 hover:bg-gray-100 hover:drop-shadow-lg relative px-2 py-1 rounded border flex flex-col shrink-0 basis-1/3' key={user.id}>
            <h5 className="text-xl mt-3 mb-2">{user.name}</h5>
            <div className="flex items-center text-sm text-gray-500 mb-1">
                <Mail/>
                <span className="ml-2">{user.email}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
                <Telephone/>
                <span className="ml-2">{user.phone}</span>
            </div>
            

            <button 
                className="transition-all bg-gray-300 text-red-500 rounded-full p-2 absolute right-1 top-1 hidden opacity-0 group-hover:block group-hover:opacity-100 hover:scale-105" 
                onClick={()=> onUserDelete(user.id)}
            >
                <Trash/>
            </button>
        </div>
    )
}

export default UserCard