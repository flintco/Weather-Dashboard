import React, { Component } from 'react';
import './App.css';
import DailyForecast from './DailyForecast';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DailyForecast day="Madison, WI" lat="43.07" long="-89.38"></DailyForecast>
        <DailyForecast day="Tuesday"></DailyForecast>
        <DailyForecast day="Wednesday"></DailyForecast>
        <DailyForecast day="Thursday"></DailyForecast>
        <DailyForecast day="Friday"></DailyForecast>
      </div>
    );
}
}

export default App;
