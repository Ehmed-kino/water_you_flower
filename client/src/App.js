import React, { Component } from 'react';
import './App.css';
import AddFlower from './componenets/AddFlower';
const request = require("es6-request");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_loaded: false,
      datas: null,
    }
  }

  componentWillMount() {
    request.get('http://localhost:5000').then(([datas, res]) => {
      this.setState({datas: JSON.parse(datas), data_loaded: true});
    });

  }

  renderData() {
    const { data_loaded, datas } = this.state;
    if (data_loaded == true) {
      return (
        <div>
          {/* <ul>
            {datas.flowers.map((flower, index) => {
              return (<li key={index} >{flower.name}</li>);
            })}
          </ul> */}
          <AddFlower />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderData()}
      </div>
    );
  }
 }

export default App;