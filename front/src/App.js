import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import Spectacles from './Components/Spectacles/Spectacles';
import Locations from './Components/Locations/Locations';
import Gallery from './Components/Gallery/Gallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch >
        <Route exact path = "/"  component={Home}/>
        <Route path = "/spectacles"  component={Spectacles}/>
        <Route path='/lieu' component={Locations} />
        <Route path='/gallerie' component={Gallery} />
      </Switch>
      <Navbar />
    </div>
  );
}

export default App;
