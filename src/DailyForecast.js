import React, { Component } from 'react';

class DailyForecast extends Component {
    constructor (props){
      super(props);
      this.state = {
        temperature: ""
      };
    }

    componentDidMount(){
      var apiCall = 'https://api.openweathermap.org/data/2.5/weather?lat=' + this.props.lat + '&lon=' + this.props.long + '&appid=48d41b2d7115ee18536bc93db9915079'
      fetch(apiCall)
        .then(res=>res.json())
        .then(data=>{
          this.setState({
            temperature: ((9 * (data.main.temp - 273) / 5) + 32).toFixed(0)
          });
        });
    }

    render() {
      const ForecastStyles = {
        backgroundColor: "lightBlue",
        width: "250px",
        height: "300px",
        float: "left"
      };
      return (
        <div style={ForecastStyles}>
          <table style={{width: "100%"}}>
            <tr>
                {/* Add text with the inputs*/}
               <th style={{color: "purple"}}>{this.props.location}</th> 
            </tr>
            <tr>
               <td>{this.state.temperature}</td> 
            </tr>
            <tr>
              <td>{this.props.lat}</td> 
            </tr>
            <tr>
              <td>{this.props.long}</td> 
            </tr>

          </table>

          <p>This is a test</p>

        </div>        
      );
    }
  }
   
  export default DailyForecast;