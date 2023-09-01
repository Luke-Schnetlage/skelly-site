import './App.css';
import Header from './Header';
import Youtube from './Youtube';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/getYT")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Youtube apiResponse={this.state.apiResponse}/>
        {/* <p className="App-intro">{this.state.apiResponse}</p>*/}
      </div>
    );
  }

  
}

export default App;
