import React from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from './componentes/paginas/Home';
import Users from './componentes/paginas/Users';
import Products from './componentes/paginas/Products';
import Init from './componentes/paginas/Init';
import { pagesInit, PagesContext} from './contexts/pages.context';


function App() {
  return (
    <>
      <PagesContext.Provider value={pagesInit}>
      <Router>      
        <Switch>          
          <Route exact path="/init" component={Init}/>
          <Route exact path="/home" component={Home}/>          
          <Route exact path="/users" component={Users}/>          
          <Route exact path="/products" component={Products}/>          
          <Route exact path="/">
            <Redirect to="/init"/>
          </Route>
          <Route exact path="*">
            <Redirect to="/init"/>
          </Route>
        </Switch>
      </Router>
      </PagesContext.Provider>
    </>
  );
}

export default App;
