import React, { Component } from 'react';

import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      color1: '#156988',
      color2: '#ffffff',
      active: true
    };
    
  }
  handleClick = (event)=>{
     this.setState({
      active: true,
        oldColor1: this.state.color1,
        oldColor2: this.state.color2,
       });
  }
  handleChangeColor1 = (event) => {
    this.setState({
      color1: event.target.value,
      active: false,
       });
  };
 handleChangeColor2 = (event) => {
    this.setState({
      color2: event.target.value,
      active: false,
        });
  };
  render() {
    return (
    <div className="background" style={{ background: this.state.active ? "linear-gradient(to right,"+ this.state.color1+","+ this.state.color2 +")": "linear-gradient(to right,"+ this.state.oldColor1+","+ this.state.oldColor2 + ")"}} >
      <h1 className="title">Color Gradient</h1>    
        <input
          type="text"
          value={this.state.color1}
          onChange={this.handleChangeColor1}
          className="input1"
         />
        <input
          type="text"
          value={this.state.color2}
          onChange={this.handleChangeColor2}
          className="input2"
         />
        <button onClick={this.handleClick.bind(this)}>GO</button>
         </div>
    );
  }
}

export default App;
