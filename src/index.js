import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Components/Home';
import List from './Components/List';
import reportWebVitals from './reportWebVitals';
import BottomAppBar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/" component={Home} />        
        <Route path="/home" component={Home} />
        <Route path="/list" component={List} />
      </Switch>
      <BottomAppBar />
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
