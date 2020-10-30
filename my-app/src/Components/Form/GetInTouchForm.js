import React, {Component} from 'react';
import './GetInTouchForm.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import formimage from '../../g-s_development/bottom-image.jpg';


class GetInTouchForm extends Component{
    state = { clicked: false} //when you click on something

    render(){
        return(
            <Row className='form-content'>
            <div className='form-content-left'>
                <img className='formphoto' src={formimage} />
            </div>
            <div className='form-content-right'>
                <Form className='Form'>
                    <div className='form-inputs'>
                        <h1 className="header">Complete the form to get in touch</h1>
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='username' className='form-label'>
                            Your Name
                        </label>
                        <input type='text' id='username' name='username' className='form-input' placeholder='Angelique'/>
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='emailaddress' className='form-label'>
                            Email Address
                        </label>
                        <input type='email' id='emailaddress' name='emailaddress' className='form-input' placeholder='Blushy777@gmail.com'/>
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='phonenumber' className='form-label'>
                            Phone Number
                        </label>
                        <input type='text' id='phonenumber' name='phonenumber' className='form-input' placeholder='0795824786'/>
                    </div>
                </Form>
            </div>
            </Row>
        );
    }
}
export default GetInTouchForm