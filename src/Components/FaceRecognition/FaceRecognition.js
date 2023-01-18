import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className="center ma ">
            <div className="absoulute mt2">
                <img id='inputImage' alt src={imageUrl} width='500px' height='auto'></img>
                <div className='bounding-box' style={{ top: box.topRow, right: box.colRight, bottom: box.bottomRow, left: box.colLeft }}></div>
            </div>

        </div >
    );
}

export default FaceRecognition;
