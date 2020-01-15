import React from 'react';
import './Box.css';


const BoxStates = {
    EMPTY: 0,
    USERX: 1,
    COMPUTERO: 2
}

class Box extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            active: this.props.active,
            boxText: this.props.boxText,
            boxIndex: this.props.boxIndex
        };
        this.userClick = this.userClick.bind(this);
        this.makeActive = this.makeActive.bind(this);
    }

   
    makeActive(){
        this.setState({active: true});
    }


    userClick (){
        
        if(!this.state.active){ 
            this.makeActive();
            this.setState({active: true});
            this.setState({boxText: "X"});
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

//old button text: {this.state.active && <p>X</p>}