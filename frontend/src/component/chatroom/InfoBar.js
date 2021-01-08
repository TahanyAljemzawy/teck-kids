import React from 'react';
// import onlineIcon from './icons/onlineIcon.png';
// import closeIcon from '../../icons/closeIcon.png';
// import {VscChromeClose } from "@react-icons/VscChromeClose";
import './InfoBar.css';
const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon"   alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img  alt="close icon" /></a>
    </div>
  </div>
);
//
export default InfoBar;