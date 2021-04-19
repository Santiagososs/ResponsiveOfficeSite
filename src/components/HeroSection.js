import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='../../images/backvideo.mp4' autoPlay loop muted />
            <h1>AGUARDAMOS   VOCÊ </h1>
            <p> o que está esperando ?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> CONTACT US </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> GET TO KNOW US  <i className='far fa-play-circle'/> </Button>
            </div>
        </div>
    )
}

export default HeroSection
