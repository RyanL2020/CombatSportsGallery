import React from 'react';
import FighterList from './FighterList';

class FighterContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      fighters: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/fighters')
      .then(response => response.json())
      .then(fighterData => this.setState({ fighters: fighterData.fighters }))

      
  }

  render() {
    return <FighterList fighters={this.state.fighters} />
  }
}

export default FighterContainer;




