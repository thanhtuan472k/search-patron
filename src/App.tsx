import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './components/Login'
import SearchForm from './components/SearchFrom'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<SearchForm />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
