import Routers from '@/app/routers';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/index.scss';

export class app extends Component {
  render() {
    return (
      <div className="App">
        <Routers />
      </div>
    );
  }
}

export default connect()(app);
