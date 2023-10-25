import React from "react";
import attack from "./images/attack.png";
import defend from "./images/defend.png";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttck = this.handleAttck.bind(this);
    this.handleDefend = this.handleDefend.bind(this);
    this.state = {
      count: 0,
    };
  }

  handleAttck() {
    // alert("Attack clicked");
    this.setState(previousState => {
      return {
        count: previousState.count + 1,
      };
    });
  }

  handleDefend() {
    // alert("Defend clicked");
    // this.setState{{ count: this.state.count - 1 }}}
    // this.setState({ count: 2 });
    this.setState(previousState => {
      return {
        count: previousState.count - 1,
      };
    });
  }

  render() {
    return (
      <div className="row text-black text-center">
        <h1>Game Score: {this.state.count}</h1>
        <p>You win at + 20 points and lose at -20 points!</p>
        <p>Last play:</p>
        <h3>Game Status:</h3>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            styles={{
              width: "100px",
              cursor: "pointer",
              border: "1px solid #161313",
            }}
            className="P-4 rounded"
            src={attack}
            onClick={this.handleAttck}
          />
        </div>
        {/* <button onClick={this.handleAttck} style={{ width: "200px" }}>
          +1
        </button> */}
        <div className="col-6 col-md-3 offset-md-3">
          <img
            styles={{
              width: "100px",
              cursor: "pointer",
              border: "1px solid #f71414",
            }}
            className="P-4 rounded"
            src={defend}
            onClick={this.handleDefend}
          />
        </div>
        {/* <button onClick={this.handleDefend} style={{ width: "200px" }}>
          -1
        </button> */}
      </div>
    );
  }
}
