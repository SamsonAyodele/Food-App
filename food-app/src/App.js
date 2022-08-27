import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Page/LandingPage';
import LoginPage from './Page/LogInPage'
import SignUpPage from './Page/SignUpPage'


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path='/' element={ <Home /> }/>
          <Route  path='/login' element={ <LoginPage /> }/>
          <Route  path='/signup' element={ <SignUpPage /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
