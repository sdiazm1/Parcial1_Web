import React from 'react'
import Segundazo from '../assets/TuSegundazo.com.png';
import BannerCarro from '../assets/Frame 1.png';
import './components.css';

function Navbar() {
    return (
        <div>
            <img src={Segundazo} alt='Segundazo' className='segundazo_img' />
            <hr />
            <img src={BannerCarro} alt='Banner carro' className='carro_img' />
        <hr />
        </div>
    )
}

export default Navbar;
