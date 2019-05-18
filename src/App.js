import React, {Component} from 'react';
import axios from 'axios';

import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [
        {product_name: 'T. Rex', price: 11, img_url:'http://www.sclance.com/pngs/toy-png/toy_png_1398530.png'},
        {product_name: 'Sad Pegasus', price: 7, img_url: 'https://atlas-content-cdn.pixelsquid.com/stock-images/mlp-fluttershy-toy-toys-DxoEW70-600.jpg'},
        {product_name: 'Dental Dog', price: 12, img_url:'https://upload.wikimedia.org/wikipedia/commons/e/e0/Bull_dog_dentist_toy.png'}
      ]
    }
    this.getInventory = this.getInventory.bind(this);
  }
  componentDidMount() {
    this.getInventory()
  }
  getInventory(){
    axios.get('/api/inventory')
      .then(res => this.setState({inventory: res.data}))
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard inventory={this.state.inventory}/>
        <Form getInventory={this.getInventory}/>
      </div>
    );
  }
}

export default App;
