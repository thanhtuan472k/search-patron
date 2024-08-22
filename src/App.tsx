import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './components/Login'
import SearchForm from './components/SearchFrom'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/search" element={<SearchForm />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default App
