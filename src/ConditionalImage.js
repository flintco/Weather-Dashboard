import React, { Component } from 'react';
import snow from './Images/snow.png'

class ConditionalImage extends Component {
    constructor (props){
      super(props);
      this.state = {
        imageAddress: ""
      };
    }

    render(){
       /* if (this.props.weather == "snow"){
            this.setState({
                imageAddress: "./Images/snow.png"
            });
        } 
        {this.state.imageAddress}
        */
       var imageName = require('./Images/snow.png')
        return(
            <div>
                <img src={snow} style={{width: "100px"}}/>
            </div>
        )
    }

}

export default ConditionalImage;