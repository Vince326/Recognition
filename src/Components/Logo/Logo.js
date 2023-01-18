import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import lightbulb from './lightbulb.png';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 170, width: 170 }} >
                <div className="Tilt-inner pa3">
                    <img style={{ paddingTop: '8px' }} alt='logo' src={lightbulb} />
                </div>
            </Tilt >
        </div >
    );
}

export default Logo;
