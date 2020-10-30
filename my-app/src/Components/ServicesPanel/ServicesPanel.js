import React, {Component} from 'react';
import service from './ServicesPanel.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import panelimage1 from '../../g-s_development/Group_232.jpg';
import panelimage2 from '../../g-s_development/Group_233.jpg';
import panelimage3 from '../../g-s_development/Group_234.jpg';
import Button from 'react-bootstrap/Button'

class ServicesPanel extends Component{
    render(){
        return(
            <Row className='PanelItems'>
                <Col xs={4} md={4}>
                    <img className='panel-images' src={panelimage1} />
                    <label className='services-label1'>
                        SERVICES
                    </label>
                    <label className='services-label2'>
                        Calibre agress to sell <br></br>
                        G&S Engineering to DRA
                    </label>
                    <Button className='read-button1'>READ MORE</Button>
                </Col>
                <Col xs={4} md={4}>
                    <img className='panel-images' src={panelimage2} />
                    <label className='services-label1'>
                        ABOUT US
                    </label>
                    <label className='services-label2'>
                        <text className={service.Green}>Get to know</text> us <br></br>
                        a little better
                    </label>
                    <Button className='read-button2'>VIEW ABOUT US</Button>
                </Col>
                <Col xs={4} md={4}>
                    <img className='panel-images' src={panelimage3} />
                    <label className='services-label1'>
                        CAREERS
                    </label>
                    <label className='services-label2'>
                        Become one of the <br></br>
                        team, join us
                    </label>
                    <Button className='read-button3'>READ MORE</Button>
                </Col>
            </Row>
        );
    }
}

export default ServicesPanel