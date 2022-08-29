import React from 'react';
import { Row, Col, Button } from 'antd';

import '../../styling/homepage.css';
import 'antd/dist/antd.min.css';

import Header from '../components/Header';

const HomePage = () => {
  const activeStyle = { color: 'purple', background: '#0092ff', padding: '8px 0' };

  return(
      <div className='homePageMainContainer'>
          <Header />

          <Row>
              <div class='homeColumns'>
                  <Col id='gamesColHeader'>Games</Col>
              </div>
              <div class='homeColumns'>
                  <Col id='appsColHeader'>Apps</Col>
              </div>
          </Row>
          <Row>
              <div class='homeColumns'>
                  <Button id='ticTacToeButton' size='large' href='/TicTacToe'>TicTacToe</Button>
              </div>
              <div class='homeColumns'>
                  <Button size='large'>PlaceHolder</Button>
              </div>
          </Row>
      </div>
  )
};

export default HomePage;
