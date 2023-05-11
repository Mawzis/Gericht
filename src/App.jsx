import React from 'react';
import './App.css';
import starBgImage from "./assets/images/backgroundImages/starBgImage.png";
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Pages from './pages/Pages';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import Footer  from './components/Footer';
import ReserveRight from './components/ResrveRight';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Faq from './pages/Faq';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Team from './pages/Team';

function App() {

  return (
    <div className="App">
        <Router>
          <NavBar />

          <div style={{backgroundImage: `url(${starBgImage})`}} className=" bg-fixed">
              <Routes>
                <Route path='/' exact element={<HomePage/>} />
                <Route path='/Pages' element={<Pages/>} />
                <Route path="/ContactUs" element={<ContactUs/>} />
                <Route path="/Blog" element={<Blog/>} />
                <Route path="/Faq" element={<Faq/>} />
                <Route path="/AboutUs" element={<AboutUs/>} />
                <Route path="/Services" element={<Services/>} />
                <Route path="/Team" element={<Team/>} />
              </Routes>
            
            <Footer/>
          </div>
          <ReserveRight/>
        </Router>
    </div>
  )
}
 
export default App
