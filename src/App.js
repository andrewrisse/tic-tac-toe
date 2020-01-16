import React from 'react';
import Board from './Board';
import bannerImg from './banner.jpeg';
import './App.css';


class App extends React.Component {  

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
