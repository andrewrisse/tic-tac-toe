import React from 'react';
import Box from './Box';
import './Board.css'

class Board extends React.Component{
    render(){
        
        return(
            <div className='board'>
                <div className='row'>
                    <div className='column'>
                        <Box />
                    </div>
                
                    <div className='column'>
                        <Box />
                    </div>
                    <div className='column'>
                        <Box />
                    </div>
                </div>

                <div className='row'>
                    <div className='column'>
                        <Box />
                    </div>
                
                    <div className='column'>
                        <Box />
                    </div>
                    <div className='column'>
                        <Box />
                    </div>
                </div>

                <div className='row'>
                    <div className='column'>
                        <Box />
                    </div>
                
                    <div className='column'>
                        <Box />
                    </div>
                    <div className='column'>
                        <Box />
                    </div>
                </div>
                
            </div>

            
            
        );
        
    }
}


export default Board;