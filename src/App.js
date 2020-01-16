import React from 'react';
import Board from './Board';
import bannerImg from './banner.jpeg';
import './App.css';

import './App.css';

class App extends React.Component {

  constructor(props){
      super(props);

      this.handleGameOver = this.handleGameOver.bind(this);
  }
  handleGameOver(){

  }

  render(){
    return (
      <div className = "tic-tac-toe-app">
        <header
          className = "title-header"
          style={{ backgroundImage: `url(${bannerImg})`}}>
        </header>
        <Board />
      </div>
     
    );
  }
}

export default App;
