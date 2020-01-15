import React from 'react';
import './Box.css';

class Box extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            active: false
        };
        this.toggleClass = this.toggleClass.bind(this);
    }

   

    toggleClass(){
        this.setState({active: true});
    }

    render(){
        return(
            <div>
                
                <button className='box' onClick={this.toggleClass}>
                    {this.state.active && <p>X</p>}
                </button>
            </div>
        );
    }
}

export default Box;