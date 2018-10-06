import React, { Component } from 'react';
import Navbar from './components/loyouts/Navbar';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Index from './components/loyouts/Index';
import {Provider} from './context';

class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
        <React.Fragment>
         <  Navbar/>
         <div className="container">
           <Switch>
            <Route  exact path="/" component={Index}/>
           </Switch> 
         </div>
        </React.Fragment> 
      </ Router>
      </Provider>   
    );
  }
}

export default App;
