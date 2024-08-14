import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Technicians from './Components/Technicians';
import Service from './Components/Service';
import About from './Components/About';

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Technicians" element={<Technicians />} ></Route >
            <Route path="/Service" element={<Service />}></Route >
            <Route path="/Contact" element={<Contact />} ></Route >
            <Route path="/About" element={<About />}></Route >
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
