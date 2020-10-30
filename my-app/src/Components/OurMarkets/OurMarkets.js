import React, {Component} from 'react';
import './OurMarkets.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import marketimage1 from '../../g-s_development/metals-minerals.png';
import marketimage2 from '../../g-s_development/infrastructure.png';
import marketimage3 from '../../g-s_development/industrial.png';
import marketimage4 from '../../g-s_development/energy.png';
import marketimage5 from '../../g-s_development/water.png';
import Button from 'react-bootstrap/Button'

class OurMarkets extends Component{
    render(){
        return(
            <Row className="MarketItems">
                <Col xs={12} md={12}>
                    <h2 className="h1-market">OUR MARKETS</h2>
                </Col>
                <Col xs={2} md={2}>
                    <img className='market' src={marketimage1} />
                    <label className='market-label'>
                        Metals & Minerals
                    </label>
                </Col>
                <Col xs={2} md={2}>
                    <img className='market' src={marketimage2} />
                    <label className='market-label'>
                        Infrastructure
                    </label>
                </Col>
                <Col xs={2} md={2}>
                    <img className='market' src={marketimage3} />
                    <label className='market-label'>
                        Industrial
                    </label>
                </Col>
                <Col xs={2} md={2}>
                    <img className='market' src={marketimage4} />
                    <label className='market-label'>
                        Energy
                    </label>
                </Col>
                <Col xs={2} md={2}>
                    <img className='market' src={marketimage5} />
                    <label className='market-label'>
                        Water
                    </label>
                </Col>
                <Col xs={12} md={12}>
                <Button className='market-button'>VIEW ALL MARKETS</Button>
                </Col>
            </Row>
        );
    }
}

export default OurMarkets