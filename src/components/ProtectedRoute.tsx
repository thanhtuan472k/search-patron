import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const ProtectedRoute = () => {
  const auth = useContext(AuthContext)

  if (!auth) {
    throw new Error('AuthContext must be used within an AuthProvider')
  }

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute