import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import { ProtectedRoute } from './layouts/Protected';
import { AuthProvider } from './contexts/auth';
import { AuthRoute } from './layouts/Auth';
import LoginForm from './components/Login';
import SearchForm from './components/SearchFrom';

function App() {
  return (
    <Router>
      {/* <Provider store={store}> */}
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<AuthRoute><LoginForm /></AuthRoute>} />
            <Route path="/" element={<ProtectedRoute><SearchForm /></ProtectedRoute>} />
          </Routes>
        </AuthProvider>
        {/* </Provider> */}
      </Router>
   
  );
}

export default App;
