import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import GetInTouch from './Components/Form/GetInTouch';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <GetInTouch/>
      <Footer/>
    </div>
  );
}

export default App;
