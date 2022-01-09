import './App.css';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Navbar  from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
export default function App() {
  const [mode,setMode] = useState('light'); //whether dark mode is enabled or not
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    
   <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
   <div className='container'>
     <Router>
     <Switch>
       <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <TextForm heading="Enter the text to analyse" mode={mode}/>
          </Route>
          
     </Switch>
   </Router>
   </div>
    </>
  );
}


