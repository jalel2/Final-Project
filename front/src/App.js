import React from 'react';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Auth from './Pages/Auth';
import Login from './Components/Login'
import Signup from './Components/Signup'


function App() {
  return (
    
      <div className="App">
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/auth' element={<Auth />} >
              <Route path='login' element= {<Login />} />
              <Route path='signup' element={<Signup/>} />
            </Route>
          </Routes>
        
      </div>
  );
}

export default App;
