import React from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import "./App.css"
import Home from './componentes/paginas/Home';
import Init from './componentes/paginas/Init';


function App() {
  return (
    <>
      <Router>      
        <Switch>          
          <Route exact path="/init" component={Init}/>
          <Route exact path="/home" component={Home}/>          
          <Route exact path="/">
            <Redirect to="/init"/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
