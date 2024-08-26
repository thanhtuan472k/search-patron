import React, { useEffect, useState } from 'react'
import { User } from '../../types/user'
import { userApi } from '../../apis/mock'
import { useAuth } from '../../contexts/auth'
import { useAppDispatch, useAppSelector } from '../../stores'
import { decrease, increase } from '../../stores/count'

const MockHome = () => {
    const {logout} = useAuth()
    const {count} = useAppSelector(state => state.todo)
    const dispatch = useAppDispatch()
const [users,setUsers] = useState<User[]>([])


useEffect(() => {
    userApi.getUsers().then((data) => {
        setUsers(data)
    })
},[])


  return (
    <div>MockHome
        <button onClick={logout}>logout</button>
          <button onClick={() => dispatch(increase())}>increase</button>
          <h1>{count}</h1>
          <button onClick={() => dispatch(decrease())}>decrease</button>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default MockHome