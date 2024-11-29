import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import ProductView from './pages/ProductView/ProductView';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const homeRef = useRef(null);
  const footerRef = useRef(null); // Ref for the Footer

  const scrollToSection = (section) => {
    if (section === 'contact-us') {
      footerRef.current?.scrollIntoView({ behavior: 'smooth' }); // Scroll to Footer for "Contact Us"
    } else {
      homeRef.current?.scrollToSection(section); // Scroll to other sections (Products, About)
    }
  };

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} scrollToSection={scrollToSection} />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home ref={homeRef} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
            <Route path="/product-view/:id" element={<ProductView />} />
          </Routes>
        </div>
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </>
  );
  
};

export default App;
