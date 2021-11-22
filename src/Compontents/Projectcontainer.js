import React from 'react'
import Project from "./Project";
import "./Projectcontainer.css";
import { Element } from "react-scroll";


const Projectcontainer = () => {
  
    const projects = [
        {
          img:"https://www.conserve-energy-future.com/wp-content/uploads/2020/09/beauty-products-kit.jpg",
          title:"Makeup API",
          desc:"website using HTML,CSS,JavaScript",
          link:"https://wonderful-ride-d679be.netlify.app",
        },
        {
          img:"https://freshdesignweb.com/wp-content/uploads/Electronics-Phone-Magento-Themes-780x612.jpg",
          title:"E-Commerce Phone Store",
          desc:"React",
          link:"https://phon-store.netlify.app/",
        },
        {
          img:"https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/988/posts/27678/image/First-Gmail-Message%20(2).jpg",
          title:"Gmail Clone",
          desc:"React and Firebase",
          link:"https://mail-clone-69020.firebaseapp.com/",
        },
    ];
  
  return (
        <Element className="projectContainer" id="projects">
        <h1>Projects</h1>
        <p>
          Here are some projects which I done for making lives of people easy.
        </p>
        <div className="project Container_projects">
    {
    projects.map((project,index)=>{
    return(
  <Project
       key={index}
       img={project.img}
       title={project.title}
       desc={project.desc}
       link={project.link}/>
    );
})}
        </div>
        </Element>
    );
}
export default Projectcontainer;
