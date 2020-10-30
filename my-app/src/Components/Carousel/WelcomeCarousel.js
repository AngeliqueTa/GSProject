import React, {Component} from 'react';
import './WelcomeCarousel.css';
import slide1 from '../../g-s_development/header_image.jpg';
import slide2 from '../../g-s_development/header_image.jpg';
import slide3 from '../../g-s_development/header_image.jpg';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Carousel from 'react-bootstrap/Carousel'

class WelcomeCarousel extends Component{
 

    render(){
        return(
          <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>WelcomeCarousel</h3>
              <p>Your asset performance partner from the Earth's surface down.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide2}
              alt="Third slide"
            />
        
            <Carousel.Caption>
            <h3>WelcomeCarousel</h3>
              <p>Your asset performance partner from the Earth's surface down.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide3}
              alt="Third slide"
            />
        
            <Carousel.Caption>
            <h3>WelcomeCarousel</h3>
              <p>Your asset performance partner from the Earth's surface down.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  export default WelcomeCarousel