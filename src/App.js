import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Result from './components/Result/Result';

class App extends Component {

  APIkey = '411d82b0e0c210380af9ccb07f19c0de';


  state = {
    inputValue: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    error: false,
  }

  inputChangeValueHandler = e => {
    const inputValue = e.target.value;
    this.setState({ inputValue })
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.inputValue.length < 3) return;

    if (prevState.inputValue !== this.state.inputValue) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&APPID=${this.APIkey}&units=metric`;

      fetch(API)
        .then(res => {
          if (res.ok) return res;
          throw Error('O cholera');
        })
        .then(res => res.json())
        .then(data => {
          const date = new Date().toLocaleString();
          this.setState(prevState => ({
            date: date,
            city: prevState.inputValue,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            error: false
          }));
        })
        .catch(err => {
          this.setState(prevState => ({
            error: true,
            city: prevState.inputValue
          }))
        });
    }
  }


  // citySubmitHandler = e => {
  //   e.preventDefault();

  //   const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&APPID=${this.APIkey}&units=metric`;

  //   fetch(API)
  //     .then(res => {
  //       if (res.ok) return res;
  //       throw Error('O cholera');
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //       const date = new Date().toLocaleString();
  //       this.setState(prevState => ({
  //         date: date,
  //         city: prevState.inputValue,
  //         sunrise: data.sys.sunrise,
  //         sunset: data.sys.sunset,
  //         temp: data.main.temp,
  //         pressure: data.main.pressure,
  //         wind: data.wind.speed,
  //         error: false
  //       }));
  //     })
  //     .catch(err => {
  //       this.setState(prevState => ({
  //         error: true,
  //         city: prevState.inputValue
  //       }))
  //     });
  // }

  render() {
    return (
      <div className="App">
        <Form
          inputChange={this.inputChangeValueHandler}
          inputValue={this.state.inputValue}
        />
        {/* <Form
          inputChange={this.inputChangeValueHandler}
          inputValue={this.state.inputValue}
          citySubmit={this.citySubmitHandler} /> */}
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
