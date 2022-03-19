import React, { Component } from 'react';
import Chessboard from './components/chessboard/Chessboard'
import {
  Theme,
} from './globalStyles'

class App extends Component {
  render() {
    return (
      <Theme>
        <Chessboard />
      </Theme>
    );
  }
}

export default App;
