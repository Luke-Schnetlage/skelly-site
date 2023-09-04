import './App.css';
import Header from './components/Header';
import Youtube from './components/Youtube';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/getYT")
      .then(res => res.json()) // Parse the response as JSON
      .then(data => {
        console.log("app.js data", data);
        this.setState({ apiResponse: data });

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    if (!Array.isArray(this.state.apiResponse) || this.state.apiResponse.length === 0) {
      return <p>Loading...</p>; // or any other suitable message
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <div className="content">
            <Youtube apiResponse={this.state.apiResponse} />
          </div>
        </div>
      );
    }
  }
}

export default App;
