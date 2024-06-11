import logo from './logo.svg';
import './App.css';
import Loginpage from'./Loginpage.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
  //  <BrowserRouter>
  //  <Routes>
  //   <Route path="/dashboard" element={<>hello </>} exact/>
  //  </Routes>
   
  //  </BrowserRouter>
   <Loginpage/>
  );
}

export default App;
