var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({isLoading: true});
    debugger;
    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(err) {
      that.setState({isLoading: false});
      alert(err);
    });
  },
  render: function() {
    var isLoading = this.state.isLoading;
    var location = this.state.location;
    var temp = this.state.temp;

    function renderMessage() {
      if(isLoading) {
        return <h3>Ladowanie danych...</h3>
      } else if(temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
