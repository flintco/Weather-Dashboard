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
        marginLeft: "10px",
        marginRight: "10px",
        marginTop: "10px",
        marginBottom: "10px",
        borderWidth: "2px",
        borderStyle: "solid"
      };
      //Handles weather inputs
      var weatherInput = "cloudy"
      var weatherRecieved = this.state.weather
      if (weatherRecieved.includes("clear sky") || weatherRecieved.includes("few clouds")){
          weatherInput = "sun"
      }
      if (weatherRecieved.includes("scattered clouds") || weatherRecieved.includes("broken clouds")){
        weatherInput = "partlycloudy"
      }
      if (weatherRecieved.includes("overcast clouds") || weatherRecieved.includes("mist")){
        weatherInput = "cloudy"
      }
      if (weatherRecieved.includes("moderate rain") || weatherRecieved.includes("light rain") || weatherRecieved.includes("light intensity drizzle")){
        weatherInput = "rainy"
      }
      //Capitalizes this.state.weather
      var nextUpper = false
      var capitalized = this.state.weather.charAt(0).toUpperCase()
      for (var i=1; i < this.state.weather.length; i++){
        if (nextUpper === false){
          capitalized = capitalized + this.state.weather.charAt(i)
          if (this.state.weather.charAt(i) === " "){
            nextUpper = true
          }
        } else {
          capitalized = capitalized + this.state.weather.charAt(i).toUpperCase()
          nextUpper = false
        }
      }

      return (
        <div style={ForecastStyles}> 
          {/*Add text with the inputs*/}
          <h2 style={{color: "black"}}>{this.props.location}</h2> 
          <p>{this.state.temperature + '\u00b0' + 'F'}</p>
          <ConditionalImage weather={weatherInput}></ConditionalImage>
          <p>{capitalized}</p>
        </div>        
      );
    }
  }
   
  export default DailyForecast;