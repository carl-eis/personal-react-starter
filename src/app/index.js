import React from 'react';
import { Route /* , Link */ } from 'react-router-dom';
import Home from '~/pages/home';
import '~/app/styles.css';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    { /* <Route exact path="/about-us" component={About} /> */}
  </div>
);

export default App;

/*
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>
*/
