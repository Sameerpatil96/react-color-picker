import React from "react";
import "./app.css";
import ColorBlock from "../src/components/ColorBlock.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "lightgrey"
    };
  }

  updateColor = (colorValue) => {
    this.setState({
      color: colorValue
    });
  };

  //code smell
  render() {
    return (
      <>
        <div className="color-container">
          <ColorBlock color="red" onClick={this.updateColor}/>
          <ColorBlock color="green" onClick={this.updateColor}/>
          <ColorBlock color="blue" onClick={this.updateColor}/>
          <ColorBlock color="yellow" onClick={this.updateColor}/>
          <ColorBlock color="pink" onClick={this.updateColor}/>
        </div>
        <div
          className="target-div"
          style={{
             backgroundColor: this.state.color
          }}
        ></div>
      </>
    );
  }
}
export default App;

//whenever state changes or props change there is an update
//virtual DOM