import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/pages/Home';
import Projects from './Components/pages/Projects';
import Company from './Components/pages/Company';
import NewProject from './Components/pages/NewProject';
import Contact from './Components/pages/Contact';

import Navbar from './Components/layout/Navbar';
import Container from './Components/layout/Container';
import Footer from './Components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Container customClass="min-height">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/company' element={<Company />} />
            <Route path='/newproject' element={<NewProject />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Container>

        <Footer />
      </Router>
    </div>
  );
}


export default App;
