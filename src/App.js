import './App.css';
import {
  HashRouter as Router,   // 👈 GitHub Pages ke liye HashRouter best hai
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';

import NoteState from './context/notes/NoteState';
import { useState } from 'react';

function App() {
  // 👇 Alert state
  const [alert, setAlert] = useState(null);

  // 👇 showAlert function
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    // Alert ko 1.5 sec baad auto-hide karne ke liye
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <NoteState>
      <Router>
        <Navbar />
        {/* 👇 Alert component ko state pass karo */}
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login showAlert={showAlert} />} />
            <Route path="/signup" element={<Signup showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;