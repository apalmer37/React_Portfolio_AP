import React from 'react';
import HeadShot from '../../assets/headshot.jpeg';
import "./pagesCss/home.css"
export default function Home() {
  return (
    
    <div className="intro" id="intro">
      <div>
      <h1 className="head" id="head">
      About Me
      </h1>
      </div>
        <img className="center-img" src={HeadShot} alt="Headshot 2019" />
            <p className="about" id="about">
            My name is Alex Palmer. I was born in Richmond, VA and I have lived here for my entire life. I am the manager of program business for Brandito. My initial goal with becomming a web developer is to help with my current role at Brandito. 
            </p>
        </div>
        
    
  );
}
