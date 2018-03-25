import React from 'react';
import { JumbotronMain } from '~/pages/home/molecules';

const Home = ({ ...props }) => {
  console.log('home page props: ', props);
  return (
    <div>
      <JumbotronMain />
    </div>
  );
};

export default Home;
