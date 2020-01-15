import React from 'react';
import Box, {BoxStates} from './Box';
import './Board.css'




class Board extends React.Component{
    
    
    constructor(props){
        super(props);

        this.state = {
            playerTurn: true,
            boxes : [],
            boxTextArr : [],
            boxActiveArr : [],
            gameOver : false
        }

        this.handleUserMove = this.handleUserMove.bind(this);
        this.handleGameOver = this.handleGameOver.bind(this);
        this.computerMove = this.computerMove.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.checkForWin = this.checkForWin.bind(this);
    }

    componentDidMount(){
        let boxesArr = [];
        let boxTextArr = [];
        let boxActiveArr = [];
        for(let i = 0; i < 9; i++){  //initialize all game boxes to empty
            boxesArr.push(BoxStates.EMPTY);
            boxTextArr.push("");
            boxActiveArr.push(false);
        }
        this.setState({boxes: boxesArr, boxTextArr: boxTextArr, boxActiveArr: boxActiveArr});
    }
    
    handleUserMove (boxClickedIndex){
        let tempArr = this.state.boxes;
        tempArr[boxClickedIndex] = BoxStates.USERX; 
        this.setState( { boxes: tempArr } );
        this.checkForWin("x");
        if(this.state.gameOver) this.handleGameOver();
        else this.computerMove();

    }

    handleGameOver(){
        alert("Game Over!");
        this.resetGame();
    }

    checkForWin(){

    }

    computerMove(){
        //find a box that is empty
        let randIndex = Math.floor(Math.random() * 10);
        while(this.state.boxes[randIndex] !== BoxStates.EMPTY){
            randIndex = Math.floor(Math.random() * 10);
        }
        let tempBoxTextArr = this.state.boxTextArr;
        tempBoxTextArr[randIndex] = "O";
        this.setState( { boxTextArray: tempBoxTextArr } );
    }

    resetGame(){

    }
    
    render(){
        
        return(
            <div className='board'>
                <div className='row'>
                    <div className='column' id="0">
                        <Box boxText = {this.state.boxTextArr[0]} boxIndex = {0}  handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[0]} />
                    </div>
                
                    <div className='column' id="1">
                        <Box boxText = {this.state.boxTextArr[1] } boxIndex = {1} handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[1]}/>
                    </div>
                    <div className='column' id="2">
                        <Box boxText = {this.state.boxTextArr[2]} boxIndex = {2} handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[2]}/>
                    </div>
                </div>

                <div className='row'>
                    <div className='column' id="3">
                        <Box boxText = {this.state.boxTextArr[3]} boxIndex = {3} handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[3]}/>
                    </div>
                
                    <div className='column' id="4">
                        <Box boxText = {this.state.boxTextArr[4]} boxIndex = {4} handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[4]}/>
                    </div>
                    <div className='column' id="5">
                        <Box boxText = {this.state.boxTextArr[5]} boxIndex = {5} handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[5]}/>
                    </div>
                </div>

                <div className='row'>
                    <div className='column' id="6">
                        <Box boxText = {this.state.boxTextArr[6]} boxIndex = {6} handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[6]}/>
                    </div>
                
                    <div className='column' id="7">
                        <Box boxText = {this.state.boxTextArr[7]} boxIndex = {7} handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[7]}/>
                    </div>
                    <div className='column' id="8">
                        <Box boxText = {this.state.boxTextArr[8]} boxIndex = {8} handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[8]}/>
                    </div>
                </div>

            </div>
        );
        
    }
}


export default Board;