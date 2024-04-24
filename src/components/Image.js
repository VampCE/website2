import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Image.css';

function Image() {
    return (
        <div className='hero-container'>

            <h1 >Locate What's Lost, Together</h1>
            <p style={{fontFamily: 'Candal'}}>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    LocateLost for Business
                </Button>

            </div>
        </div>
    );
}

export default Image;