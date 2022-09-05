import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Page/LandingPage';
import LoginPage from './Page/LogInPage'
import SignUpPage from './Page/SignUpPage'
import Dashboard from './Page/Dashboard'
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from './Components/ProtectedRoutes';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path='/' element={ <Home /> }/>
          <Route  path='/login' element={ <LoginPage /> }/>
          <Route  path='/signup' element={ <SignUpPage /> }/>

          <Routes element={<ProtectedRoutes />}>
              <Route path='/dashboard' element={ <Dashboard /> } />
          </Routes>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
