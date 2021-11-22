import React from 'react'
import { Element } from 'react-scroll'
import "./TopContainer.css"
import TopContent from './TopContent';

const TopContainer = () => {
    return (
        <div>
            <Element name="about" className="topcontainer">
            <TopContent/>
            </Element>
        </div>
    )
}

export default TopContainer
