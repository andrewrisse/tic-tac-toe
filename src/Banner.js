import React from 'react';
import StyledButton from './StyledButton';
import './Banner.css';


const Banner = ({winner, onPlayAgain}) => {
    let output;
    if(winner === "User") output = <h1>You Win!</h1>;
    else if(winner === "Computer") output = <h1>You Lose!</h1>;
    else if(winner === "Tie") output = <h1>Tie!</h1>;

    return(
        <div className='banner'>
            {output}
            <StyledButton text="Play Again?" onClick={onPlayAgain} />
        </div>
    );
    
};

export default Banner;