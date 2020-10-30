import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import GetInTouchForm from './Components/Form/GetInTouchForm';
import WelcomeCarousel from './Components/Carousel/WelcomeCarousel';
import DescriptionPar from './Components/DescriptionPar/descriptionPar';
import OurMarkets from './Components/OurMarkets/OurMarkets';
import ServicesPanel from './Components/ServicesPanel/ServicesPanel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <WelcomeCarousel/>
      <DescriptionPar/>
      <ServicesPanel/>
      <OurMarkets/>
      <GetInTouchForm/>
      <Footer/>
    </div>
  );
}

export default App;
