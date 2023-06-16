import {useState, useEffect} from 'react'

import axios from 'axios'

function App() {
  const [status, setStatus] = useState('init')
  const [users, setUsers] = useState([])

  async function fetchData() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')

    setUsers(res.data)
    setStatus(res.status=== 200? 'ok': 'error')
  }

  useEffect(()=> {
    fetchData()
  }, [])

  return (
    <div className="App w-5/6 m-auto">
      <h1 className='font-bold my-8 '>USERS</h1>

      <div className='flex justify-center'>
        <div className='flex flex-wrap'>
          {status === 'ok' && users && users.length > 0 && <>
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
      
    </div>
  );
}

export default App;
