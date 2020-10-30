import React, {Component} from 'react';
import './descriptionPar.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class DescriptionPar extends Component{
    render(){
        return(
            <Row className='descriptionPar'>
                <Col xs={12} md={12}>
                    <p>
                        From electrical and mechanical Component overhauls for surface and underground equipment <br></br>
                        through to billion-dollar mine and port construction projects, G&S Engineering offer <br></br>
                        comprehensive services that encompass the project lifestyle from construction, through <br></br>
                        maintenance and optimization to final decommissioning and deconstruction.          
                    </p>
                </Col>
            </Row>
        );
    }
}

export default DescriptionPar