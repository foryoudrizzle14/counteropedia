import React from "react";

export default class Counter extends React.Component {
  handleAttck() {
    alert("Attack clicked");
  }

  handleDefend() {
    alert("Defend clicked");
  }
  render() {
    return (
      <div className="row text-black">
        <h1>Counter:</h1>
        <button onClick={this.handleAttck} style={{ width: "200px" }}>
          +1
        </button>
        <button onClick={this.handleDefend} style={{ width: "200px" }}>
          -1
        </button>
      </div>
    );
  }
}
