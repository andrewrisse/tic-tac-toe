import React from 'react';
import Box, {BoxStates} from './Box';
import './Board.css'
import { findAllInRenderedTree } from 'react-dom/test-utils';


const WINNING_COMBOS = {
    rows : [ [0,1,2], [3,4,5], [6,7,8] ],
    columns : [ [0,3,6], [1,4,7], [2,5,8] ],
    diagonals : [ [0,4,8], [2,4,6] ]
}

class Board extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            boxesStatesArr : [],
            boxTextArr : [],
            boxActiveArr : [],
            gameOver : false,
            userTurn : true
        }

        this.handleUserMove = this.handleUserMove.bind(this);
        this.computerMove = this.computerMove.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.haveWinner= this.haveWinner.bind(this);
        this.checkBoardFull = this.checkBoardFull.bind(this);
        this.gameIsTied = this.gameIsTied.bind(this);
        this.gameOver = this.gameOver.bind(this);
    }

    componentDidMount(){
        let boxesStatesArr = [];
        let boxTextArr = [];
        let boxActiveArr = [];
        for(let i = 0; i < 9; i++){  //initialize all game boxes to empty
            boxesStatesArr.push(BoxStates.EMPTY);
            boxTextArr.push("");
            boxActiveArr.push(false);
        }
        this.setState({boxesStatesArr: boxesStatesArr, boxTextArr: boxTextArr, boxActiveArr: boxActiveArr});
    }
    
    handleUserMove (boxClickedIndex){
        this.setState({userTurn : false});
        let boxesStatesArr = this.state.boxesStatesArr;
        let boxTextArr = this.state.boxTextArr;
        let boxActiveArr = this.state.boxActiveArr;
        boxesStatesArr[boxClickedIndex] = BoxStates.USERX; 
        boxTextArr[boxClickedIndex] = "X";
        boxActiveArr[boxClickedIndex] = true;
        this.setState( { boxesStatesArr: boxesStatesArr, boxTextArr: boxTextArr, boxActiveArr: boxActiveArr} );
        
        if(!this.haveWinner(BoxStates.USERX)){
            if(!this.checkBoardFull()){
                this.computerMove();
            }
            if(!this.haveWinner(BoxStates.COMPUTERO)){
                if(this.checkBoardFull()){
                    this.gameIsTied();
                }
                else{
                    this.setState({userTurn: true});
                }
            }  
        }
    }

    checkBoardFull(){
        let boxActiveArr = this.state.boxActiveArr;
        for(let i = 0; i < 9; i++){
            if(!boxActiveArr[i]) return false;
        }
        return true;
    }


    gameIsTied(){
        return;
    }

    haveWinner(BoxState){
        let foundWinner = false;
        let boxesStatesArr = this.state.boxesStatesArr;
        WINNING_COMBOS.rows.forEach(row => {
            if(boxesStatesArr[row[0]] === BoxState && boxesStatesArr[row[1]] === BoxState && boxesStatesArr[row[2]] === BoxState){
                foundWinner = true;
            }
        });
        WINNING_COMBOS.columns.forEach(column => {
            if(boxesStatesArr[column[0]] === BoxState && boxesStatesArr[column[1]] === BoxState && boxesStatesArr[column[2]] === BoxState){
                foundWinner = true;
            }
        });
        WINNING_COMBOS.diagonals.forEach(diagonal => {
            if(boxesStatesArr[diagonal[0]] === BoxState && boxesStatesArr[diagonal[1]] === BoxState && boxesStatesArr[diagonal[2]] === BoxState){
                foundWinner = true;
            }
        });
        if(foundWinner){
            this.gameOver(BoxState);
        } 
        return foundWinner;
    }

    gameOver(BoxState){
        if(BoxState === BoxStates.USERX){
            alert("You Win!")
        }
        else{
            alert("You Lose!");
        }
    }

    computerMove(){
        let randIndex = Math.floor(Math.random() * 9);
        while(this.state.boxesStatesArr[randIndex] !== BoxStates.EMPTY){//find a box that is empty
            randIndex = Math.floor(Math.random() * 9);
        }
        let boxesStatesArr = this.state.boxesStatesArr;
        let boxTextArr = this.state.boxTextArr;
        let boxActiveArr = this.state.boxActiveArr;
        boxesStatesArr[randIndex] = BoxStates.COMPUTERO;
        boxTextArr[randIndex] = "O";
        boxActiveArr[randIndex] = true;
        this.setState( { boxesStatesArr: boxesStatesArr, boxTextArray: boxTextArr, boxActiveArr: boxActiveArr } );
    }

    resetGame(){
        return;
    }
    
    render(){
        
         return(
             <div className='board'>
                 <div className='row'>
                     <div className='column' id="0">
                         <Box userTurn = {this.state.userTurn} boxText = {this.state.boxTextArr[0]} boxIndex = {0}  handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[0]} />
                     </div>
                
                     <div className='column' id="1">
                         <Box userTurn = {this.state.userTurn} boxText = {this.state.boxTextArr[1] } boxIndex = {1} handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[1]}/>
                     </div>
                    <div className='column' id="2">
                         <Box userTurn = {this.state.userTurn} boxText = {this.state.boxTextArr[2]} boxIndex = {2} handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[2]}/>
                     </div>
                 </div>

                 <div className='row'>
                     <div className='column' id="3">
                         <Box userTurn = {this.state.userTurn} boxText = {this.state.boxTextArr[3]} boxIndex = {3} handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[3]}/>
                     </div>
                
                     <div className='column' id="4">
                         <Box userTurn = {this.state.userTurn} boxText = {this.state.boxTextArr[4]} boxIndex = {4} handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[4]}/>
                     </div>
                     <div className='column' id="5">
                         <Box userTurn = {this.state.userTurn} boxText = {this.state.boxTextArr[5]} boxIndex = {5} handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[5]}/>
                     </div>
                 </div>

                 <div className='row'>
                     <div className='column' id="6">
                         <Box userTurn = {this.state.userTurn} boxText = {this.state.boxTextArr[6]} boxIndex = {6} handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[6]}/>
                     </div>
                
                     <div className='column' id="7">
                         <Box userTurn = {this.state.userTurn} boxText = {this.state.boxTextArr[7]} boxIndex = {7} handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[7]}/>
                     </div>
                     <div className='column' id="8">
                         <Box userTurn = {this.state.userTurn} boxText = {this.state.boxTextArr[8]} boxIndex = {8} handleUserMove = {this.handleUserMove} active = {this.state.boxActiveArr[8]}/>
                     </div>
                 </div>

             </div>
         );
        
    }
}


export default Board;