import React, { Component } from 'react';
import ConditionalImage from './ConditionalImage';

class DailyForecast extends Component {
    constructor (props){
      super(props);
      this.state = {
        temperature: "",
        weather: ""
      };
    }

    componentDidMount(){
      var apiCall = 'https://api.openweathermap.org/data/2.5/weather?lat=' + this.props.lat + '&lon=' + this.props.long + '&appid=48d41b2d7115ee18536bc93db9915079'
      fetch(apiCall)
        .then(res=>res.json())
        .then(data=>{
          this.setState({
            temperature: ((9 * (data.main.temp - 273) / 5) + 32).toFixed(0),
            weather: data.weather[0].description
          });
        });
    }

    render() {
      const ForecastStyles = {
        backgroundColor: "lightBlue",
        width: "250px",
        height: "300px",
        float: "left",
        marginLeft: "3%",
        marginTop: "10px",
        marginBottom: "10px"
      };
      return (
        <div style={ForecastStyles}> 
          {/*Add text with the inputs*/}
          <h2 style={{color: "purple"}}>{this.props.location}</h2> 
          <p>{this.state.temperature + '\u00b0' + 'F'}</p>
          <p>{this.state.weather}</p>
          <ConditionalImage weather="snow"></ConditionalImage>
        </div>        
      );
    }
  }
   
  export default DailyForecast;