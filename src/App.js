import { buildQueries } from '@testing-library/dom';
import React, { Component } from 'react';
import './App.css';
import DailyForecast from './DailyForecast';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="Header">Weather Dashboard</div>
        <div id="Main">
          <div id="HorizontalAlign">
          <DailyForecast location="Chicago, IL" lat="41.88" long="-87.62"></DailyForecast>
          <DailyForecast location="Columbus, OH" lat="39.96" long="-82.99"></DailyForecast>
          <DailyForecast location="Detroit, MI" lat="42.33" long="-83.05"></DailyForecast>
          <DailyForecast location="Indianapolis, IN" lat="39.77" long="-86.16"></DailyForecast>
          <DailyForecast location="Madison, WI" lat="43.07" long="-89.38"></DailyForecast>
          <DailyForecast location="Milwaukee, WI" lat="43.03" long="-87.92"></DailyForecast>
          <DailyForecast location="Minneapolis, MN" lat="44.98" long="-93.27"></DailyForecast>
          <DailyForecast location="Omaha, NE" lat="41.26" long="-95.94"></DailyForecast>
          </div>
        </div>
        <div id="Footer">
            <div id="FootCenter">
              <DailyForecast location="Minneapolis, MN" lat="44.98" long="-93.27"></DailyForecast>
              <DailyForecast location="Omaha, NE" lat="41.26" long="-95.94"></DailyForecast>
            </div>
        </div>
      </div>
    );
}
}

export default App;
