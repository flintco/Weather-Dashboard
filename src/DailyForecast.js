import React, { Component } from 'react';

class DailyForecast extends Component {
    constructor (props){
      super(props);
      this.state = {
        temperature: 15
      };

    }

    componentDidMount(){
      fetch('https://api.openweathermap.org/data/2.5/weather?lat=43.07&lon=-89.38&appid=48d41b2d7115ee18536bc93db9915079')
        .then(res=>res.json())
        .then(data=>{
          this.setState({
            temperature: ((9 * (data.main.temp - 273) / 5) + 32).toFixed(0)
          });
        });
    }

    render() {
      return (
        <div>
          <table>
            <tr>
               <th>{this.props.day}</th> 
            </tr>
            <tr>
               <td>{this.state.temperature}</td> 
            </tr>

          </table>

        </div>        
      );
    }
  }
   
  export default DailyForecast;