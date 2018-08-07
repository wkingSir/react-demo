import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BMapComponent from './component/bmap'
import BMap from 'BMap'
import AntdModal from './component/antdCom'

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'


class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
        
        <BMapComponent/>
        <AntdModal />
        <Picker />
      </div>
    );
  }
}

export default App;