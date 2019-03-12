import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BMapComponent from './component/bmap'
import AntdModal from './component/antdCom'
import VideoTest from './component/video/video'

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import Execise from './component/execis'


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
        <br></br>
        <div>
          <Execise/>
        </div>
        <div>
          <VideoTest/>
        </div>
      </div>
    );
  }
}

export default App;
