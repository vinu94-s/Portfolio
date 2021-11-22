import React from 'react';
import './App.css';
import Header from "./Compontents/Header";
import Projectcontainer from './Compontents/Projectcontainer';
import Skillcontainer from './Compontents/Skillcontainer';
import TopContainer from './Compontents/TopContainer';
import Contact from "./Compontents/Contact";

function App() {
  return (
    <div className="App">
     <Header/>
     <TopContainer/>
     <Skillcontainer/>
     <Projectcontainer/>
     <Contact/>
     
    </div>
  );
}

export default App;
