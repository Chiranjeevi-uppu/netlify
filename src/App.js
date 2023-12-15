import Navbar from './components/Navbar';
import BuyLands from './components/BuyLands';
import Premium from './components/Premium';
import SellMyLand from './components/SellMyLand';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Home from './components/Home';
import { LandProvider } from "./LandContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  { useEffect } from 'react';
//import ReactGA from 'react-ga4';
import TagManager from 'react-gtm-module'



function App() {
  const tagManagerArgs = {
    gtmId: '<GTM-5R45MVVQ>'
  }
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)

  }, []);

   
   

  return (
    <LandProvider>
    <BrowserRouter>
    <Navbar/>
    {/* <Footer/> */}
      <Routes>
         <Route path="/" element={<Home />} />
        <Route index element={<Home />} /> 
        <Route path="/buylands" element={<BuyLands />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/sellmyland" element={<SellMyLand />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/navbar" element={<Navbar />} />
         {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
    </LandProvider>
  );
}

export default App;
