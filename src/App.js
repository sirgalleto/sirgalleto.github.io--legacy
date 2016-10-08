import React, { Component } from 'react';
import backgroundImages from './backgroundImages';
import './App.css';

console.log(backgroundImages);

class App extends Component {
  componentDidMount() {
    let backgroundImage = '';
    let backgroundPosition = '';

    for(var x in backgroundImages ) {
      if(x > 0) {
        backgroundImage += ', ';
        backgroundPosition += ', ';
      }
      backgroundImage += 'url(..'+ backgroundImages[x] +')';
      backgroundPosition += x * 100 + 'vw';
    }

    this._app.style.backgroundImage = backgroundImage;
    this._app.style.backgroundPosition = backgroundPosition;

    console.log(this._app.style);
  }

  render() {
    return (
      <div className="App" ref={(element)=>{ this._app = element; }}>
        <h1>
          Welcome!!
        </h1>
        <h2>
          Construction in progess
        </h2>
      </div>
    );
  }
}

export default App;
