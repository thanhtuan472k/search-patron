import React from 'react'
import { useAuth } from '../../contexts/auth'
import { User } from '../../types/user'

const MockLogin = () => {
    const {login} = useAuth()
  return (
    <div>MockLogin

        <button onClick={() => login({} as User)}>Login</button>
    </div>
  )
}

export default MockLogin