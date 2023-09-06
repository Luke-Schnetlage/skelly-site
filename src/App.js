import './App.css';
import Header from './components/Header';
import Youtube from './components/Youtube';
import { Component } from 'react';
import Content from './components/Content'

class App extends Component {



  render() {
    
    //console.log("apiResponse#1", this.state.apiResponse);
    
    /*if (!Array.isArray(this.state.apiResponse) || this.state.apiResponse.length === 0) {
      return <p>App Loading...</p>; // or any other suitable message
    } else {*/

      return (
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <div className="content">
            <Content />
          </div>
        </div>
      );
    }
    
  }
//}

export default App;
