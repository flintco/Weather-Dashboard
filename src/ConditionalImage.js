import React, { Component } from 'react';
import cloudy from './Images/cloudy.png';
import lightning from './Images/lightning.png';
import partlycloudy from './Images/partlycloudy.png';
import rainy from './Images/rainy.png';
import snow from './Images/snow.png';
import sun from './Images/sun.png';

class ConditionalImage extends Component {
    constructor (props){
      super(props);
    }

    render(){
        var source;
        if (this.props.weather == "cloudy"){
            source = cloudy
        } else if (this.props.weather == "lightning"){
            source = lightning
        } else if (this.props.weather == "partlycloudy"){
            source = partlycloudy
        } else if (this.props.weather == "rainy"){
            source = rainy
        } else if (this.props.weather == "snow"){
            source = snow
        } else {
            source = sun
        }
        return(
            <div>
                <img src={source} style={{width: "100px", height:"100px"}}/>
            </div>
        )
    }

}

export default ConditionalImage;