var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <p>W {location} jest {temp}&#176;C</p>
  )
};

module.exports = WeatherMessage;
