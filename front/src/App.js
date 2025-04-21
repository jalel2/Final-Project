import React from 'react';
import{Route,Routes} from'react-router-dom';

import Home from './Components/Home';

import Auth from './Pages/Auth';
import Login from './Components/Login'
import Signup from './Components/Signup'
import AdminDashboard from './Components/AdminDashboard';
import Test from './Components/Test';


function App() {
  return (
    
      <div className="App">
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/auth' element={<Auth />} >
              <Route path='login' element= {<Login />} />
              <Route path='signup' element={<Signup/>} />
            </Route>
            
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        
      </div>
  );
}

export default App;
