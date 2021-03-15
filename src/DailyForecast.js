import React, { Component } from 'react';

class DailyForecast extends Component {
    constructor (props){
      super(props);
      this.state = {
        temperature: 15
      };

    }

    componentDidMount(){
      fetch('https://randomuser.me/api')
        .then(res=>res.json())
        .then(data=>{
          this.setState({
            temperature: data.results[0].gender
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