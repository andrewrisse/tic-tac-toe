import React from 'react';
import './Box.css';


const BoxStates = {
    EMPTY: 0,
    USERX: "X",
    COMPUTERO: "O"
}

class Box extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            active: this.props.active,
            boxText: this.props.boxText,
            boxIndex: this.props.boxIndex,
            userTurn: this.props.userTurn
        };
        this.userClick = this.userClick.bind(this);
    }

    static getDerivedStateFromProps(props, state){
            return{
                active: props.active,
                boxText: props.boxText,
                userTurn: props.userTurn
            };
    }

    userClick (){
        if(!this.state.active && this.state.userTurn){ 
            this.props.handleUserMove(this.state.boxIndex);
        }
    }

    render(){
        return(
            <div>
                <button className='box' onClick={this.userClick}>
                    <p>{ this.state.boxText }</p>
                </button>
            </div>
        );
    }
}

export default Box;
export {BoxStates};

