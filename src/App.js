import { useState } from 'react';
import './App.css';
import NavBar from './Compponent/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Compponent/Home/Home';
import About from './Compponent/About/About';
import Blog from './Compponent/Blog/Blog';
import Contact from './Compponent/Contact/Contact';


function App() {
  const [toggle, setToggle]= useState(false)

  const toggleMenu=()=>{
    setToggle(!toggle)   
 }
  return (
    <Router>
    <div className="App">
      <NavBar toggle={toggle} toggleMenu={toggleMenu}  />
      <div className="con">
        <Switch>
          <Route exact path ='/'>
            <Home/>
          </Route>
          <Route  path ='/about'>
            <About/>
          </Route>
          <Route  path ='/blog'>
            <Blog/>
          </Route>
          <Route  path ='/contact'>
            <Contact/>
          </Route>
        </Switch>
      </div>
      
    </div>

     </Router>
  );
}

export default App;
