import React, { Component } from 'react';
import './App.css';
import DailyForecast from './DailyForecast';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DailyForecast day="Monday"></DailyForecast>
        <DailyForecast day="Tuesday"></DailyForecast>
        <DailyForecast day="Wednesday"></DailyForecast>
        <DailyForecast day="Thursday"></DailyForecast>
        <DailyForecast day="Friday"></DailyForecast>
      </div>
    );
}
}

export default App;
