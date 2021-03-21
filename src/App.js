import { buildQueries } from '@testing-library/dom';
import React, { Component } from 'react';
import './App.css';
import DailyForecast from './DailyForecast';

class App extends Component {
  render() {
    const ForecastStyles = {
      backgroundColor: "blue",
      width: "100px",
      height: "100px",
      float: "left"
    };
    return (
      <div className="App">
        <h1 style={{color: "red"}}>Hello</h1>
        <DailyForecast location="Madison, WI" lat="43.07" long="-89.38" style={{color: "red"}}></DailyForecast>
        <DailyForecast style={ForecastStyles} location="Chicago, IL" lat="41.88" long="-87.62"></DailyForecast>
        <DailyForecast style={ForecastStyles} location="Minneapolis, MN" lat="44.98" long="-93.27"></DailyForecast>
        <DailyForecast style={ForecastStyles} location="Milwaukee, WI" lat="43.03" long="-87.92"></DailyForecast>
        <DailyForecast style={ForecastStyles} location="Detroit, MI" lat="42.33" long="-83.05"></DailyForecast>
      </div>
    );
}
}

export default App;
