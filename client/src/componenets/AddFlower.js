import React, { Component } from 'react';
import { postData } from '../utils/RestApi';

class AddFlower extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowerDetails: {},
    }
  }

  componentWillMount() {
  }

  handlePost = () => {
    postData(`add`, this.state.flowerDetails)
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  onChange = (event) => {
    const {name, value} = event.target;
    const existingFlowerDetails = this.state.flowerDetails
    this.setState({flowerDetails: {...existingFlowerDetails, [name]: value}})
  }

  render() {
    return (
      <div>
        <form action='POST'>
          <input type="text" name="name" onChange={this.onChange}/>
          <input type="text" name="description" onChange={this.onChange}/>
          <input type="submit" name="click" onClick={this.handlePost} />
        </form>
      </div>
    );
  }
}

export default AddFlower;