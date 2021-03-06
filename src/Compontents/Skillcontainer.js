import React from 'react'
import {Element } from 'react-scroll'
import lapImg from "../Laptop.jpg";
import "./Skillcontainer.css";
import LinearProgress from "@material-ui/core/LinearProgress";
const SkillContainer = () => {
    return (
      <Element className="skillContainer" id="skills">
        <div className="skillContainer__image">
          <img src={lapImg} alt="" />
        </div>
        <div className="skillContainer__text">
          <h2>SKILLSET</h2>
          <div className="skillContainer__skillSet">
            <h5>React Js</h5>
            <div className="skillContainer__slider skillContainer__slider1">
              <LinearProgress variant="determinate" value={90} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>NodeJS</h5>
            <div className="skillContainer__slider skillContainer__slider2">
              <LinearProgress variant="determinate" value={80} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>Express</h5>
            <div className="skillContainer__slider skillContainer__slider3">
              <LinearProgress variant="determinate" value={75} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>SQL</h5>
            <div className="skillContainer__slider skillContainer__slider4">
              <LinearProgress variant="determinate" value={50} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>MongoDB</h5>
            <div className="skillContainer__slider skillContainer__slider5">
              <LinearProgress variant="determinate" value={80} />
            </div>
          </div>
          <div className="skillContainer__skillSet">
            <h5>AWS</h5>
            <div className="skillContainer__slider skillContainer__slider6">
              <LinearProgress variant="determinate" value={65} />
            </div>
          </div>
        </div>
      </Element>
    );
  };
  
  export default SkillContainer;
