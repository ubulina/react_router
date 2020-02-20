import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div className="App">

    <header className="App-header">
    <p>
    Welcome to React Router
    </p>
    </header>

    <BrowserRouter>
    <div>
      <Link to="/">Home</Link>{' '}
      <Link to="/about">About</Link>{' '}
      <Link to="/contact">Contact</Link>{' '}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route render={() => <h1>Page not found</h1>}/>
      </Switch>
    </div>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
