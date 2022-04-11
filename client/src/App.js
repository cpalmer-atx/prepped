import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router> 
  );
}

export default App;
