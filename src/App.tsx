import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NobelPrize from './components/NobelPrize';
import { State } from './types';

class App extends Component {
  state: State = {
    prizes: [],
  };

  componentDidMount() {
    fetch('https://api.nobelprize.org/2.1/nobelPrizes')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ prizes: data.nobelPrizes });
      });
  }

  render() {
    const { prizes } = this.state;
    return (
      <div className="App">
        <Header />
        { prizes.map((prize, index) => (
          <NobelPrize key={ index } prizeInfo={ prize } />
        )) }
      </div>
    );
  }
}

export default App;
