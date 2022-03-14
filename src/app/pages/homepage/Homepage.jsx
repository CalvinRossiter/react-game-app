import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Divider, Button } from 'antd';

import Header from '../components/Header';

const HomePage = () => {
  const activeStyle = { color: 'purple', background: '#0092ff', padding: '8px 0' };

  return(
    <div className='homePageMainContainer'>
      <Header />
      <Divider orientation='left'>Games</Divider>
      <Row gutter={16}>
        <Col className='gutter-row' span={12}>
          <Button>
            <NavLink activeStyle={ activeStyle } to='/TicTacToe'>TicTacToe</NavLink>
          </Button>
        </Col>
        <Col className='gutter-row' span={12}>
          <NavLink activeStyle={ activeStyle } to='/TicTacToe'>TicTacToe</NavLink>
        </Col>
      </Row>
      <Divider orientation='left'>Apps</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row' span={12}>
          <NavLink activeStyle={ activeStyle } to='/TicTacToe'>TicTacToe</NavLink>
        </Col>
        <Col className='gutter-row' span={12}>
          <NavLink activeStyle={ activeStyle } to='/TicTacToe'>TicTacToe</NavLink>
        </Col>
      </Row>
    </div>
  )
};

export default HomePage;
