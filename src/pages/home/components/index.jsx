import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist';

const Home = ({ changePage }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome home!</p>
      <button onClick={() => changePage()}>Go to about page via redux</button>
    </div>
  );
}

export default Home;