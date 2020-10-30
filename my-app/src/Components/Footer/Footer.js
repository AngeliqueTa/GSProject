import React, {Component} from 'react';
import {FooterItems} from './FooterItems';
import './Footer.css';
import logofooter from '../../g-s_development/g-s_logo_compact.png';
import {FooterMedia} from './FooterMedia';
import {FooterFooter} from './FooterFooter';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends Component{
    state = { clicked: false} //when you click on something

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return(
            <Row className="FooterItems">
                <Col xs={6} md={4}>
                    <h1 className="Footer-logo"><img src={logofooter} /><i className="fab fa-react"></i></h1>
                </Col>
                <Col xs={6} md={4}>
                    <div className="menu-icon" onClick="{this.handleClick}">
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'Footer-menu active' : 'Footer-menu'}>
                        {FooterItems.map((item, index) => {   return (
                            <li><a className={item.cName} href={item.url}>
                                {item.title}
                            </a></li>
                        )})}
                    </ul>
                </Col>
                <Col xs={6} md={4}>
                    <ul className={this.state.clicked ? 'Footer-media active' : 'Footer-media'}>
                        {FooterMedia.map((item, index) => {   return (
                            <li>
                                {item.MediaImage}
                            </li>
                        )})}
                    
                    </ul>
                </Col>
                <Col xs={12} md={12}>
                    <ul className={this.state.clicked ? 'Footer-websiterights active' : 'Footer-websiterights'}>
                        {FooterFooter.map((item, index) => {   return (
                        <li><small><a className={item.cName} href={item.url}>
                            {item.title}
                        </a></small></li>
                        )})}
                    </ul>
                </Col>
            </Row>
        )
    }
}

export default Footer