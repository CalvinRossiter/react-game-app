import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const activeStyle = { color: 'purple' };

  return(
    <div class='homePageMainContainer'>
      <div class='homePageTitleContainer'>
        <h1 id='homePageTitle'>Game for Fame!</h1>
      </div>
      <div>
        <NavLink activeStyle={ activeStyle } to='/TicTacToe'>TicTacToe</NavLink>
      </div>
    </div>
  )
};

export default HomePage;
