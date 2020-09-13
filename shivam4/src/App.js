import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
//  import Welcome from './components/welcome'
import DeleteData from './components/DeleteData'
import AddData from './components/AddData'
import EditData from './components/EditData';
import ShowData from './components/ShowData';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

       
       
       <Nav />
       <switch>
       < Route path="/adddata"  exact component={AddData} />
       < Route path="/deletedata" exact component={DeleteData}  />
       < Route path= "/editdata"  exact component={EditData} />
       <  Route path="/showdata" exact component={ShowData} />
       <Route path="/" exact component={HomePage} />
       </switch>
       
       
      </div>

      </Router>

    );

  }
}

export default App;
