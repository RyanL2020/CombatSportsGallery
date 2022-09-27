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
  .then((response) => response.json())
  .then((data) => console.log(data));
    //  fetch("http://localhost:3000/fighters")
    //     .then((response) => {
    //         console.log(response)
    //         let data 
    //         if (response.ok) {

    //             data = response.json()
    //             console.log(data)
    //         }
    //         return data;
    //     }) 
    //     .then((fighters) => {
       
    //         console.log(fighters, "fighters here")
        
        
    // })

      
  }

  render() {
    return <FighterList fighters={this.state.fighters} />
  }
}

export default FighterContainer;




