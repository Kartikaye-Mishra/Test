import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slideshow.css';
import images from './images/images_db'; 

const Slideshow= () => {
 return (
 <div className="slide-container">
 <Zoom scale={1}>
 {images.map((each, index) => (
//  <div className="image_box" style={{background:`url(${each})`}} key={index}>
 <div className="image_box"  key={index}>

 <img key={index} src={each} alt='IMG'/>
 </div>
 ))}
 </Zoom>
 <div>

 </div>
 </div>
 )
}
export default Slideshow;
