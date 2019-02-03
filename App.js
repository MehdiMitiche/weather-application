import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
import Header from './components/Header';

class App extends Component {
  constructor(){
    super()

    this.state = {
      temperature : '',
      Weather : '' , 
      location : '',
      humidity : '',
      windSpeed : '',
      cityInput : '',
      countryInput : ''
    }
  }

  getWeather = async (event) =>{
    event.preventDefault();
    const API_KEY = 'b7ed116b4ea17b35e683037702056cd8';
    const city = this.state.cityInput;
    const country = this.state.countryInput;

    if(city!=='' && country!==''){
      
      const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
      console.log(api)
      if(api.status !== 404){
        const data = await api.json();

        this.setState({
          temperature : data.main.temp,
          Weather : data.weather[0].description , 
          location :data.name,
          humidity : data.main.humidity,
          windSpeed : data.wind.speed,
          cityInput : '',
          countryInput : ''
        })
      }
    }
}

onChangeCityInput = (event) => {
  this.setState({
      cityInput : event.target.value
  })
}

onChangeCountryInput = (event) => {
  this.setState({
      countryInput : event.target.value
  })
}


  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className = "row">
            <div
            className = "col s12 offset-l3 col l6 WeatherCard"
            style = {{marginTop : 40 , height : 500}}
            >
                <Form
                 getWeather = {this.getWeather}
                 onChangeCityInput={this.onChangeCityInput}
                 onChangeCountryInput={this.onChangeCountryInput} 
                 cityInput = {this.state.cityInput}
                 countryInput = {this.state.countryInput}
                />
                <Weather
                 temperature ={this.state.temperature} 
                 humidity = {this.state.humidity}
                 location = {this.state.location}
                 weather = {this.state.Weather} 
                 windSpeed = {this.state.windSpeed}              
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
