import React, { Component } from 'react';

class DailyForecast extends Component {
    constructor (props){
      super(props);
      this.state = {
        temperature: 15
      };

    }
    componentDidMount(){
      this.setState({
        temperature: 10
      });
    }
// add state to constructor and then set state when receiving api in when component mounts
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