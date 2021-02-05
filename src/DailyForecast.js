import React, { Component } from 'react';

class DailyForecast extends Component {

// add state to constructor and then set state when receiving api in when component mounts
    render() {
      return (
        <div>
          <table>
            <tr>
               <th>{this.props.day}</th> 
            </tr>
            <tr>
               <td>76 degrees</td> 
            </tr>

          </table>

        </div>        
      );
    }
  }
   
  export default DailyForecast;