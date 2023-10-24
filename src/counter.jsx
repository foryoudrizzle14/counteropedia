import React from "react";

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
    alert("Attack clicked");
    this.setState((previousState) => return {
      count: previousState.count + 100)
  }} // this.setState{{ count: this.state.count + 1 }}}
    // this.setState({ count: 2 });
    // this.state.count = 2;
  

    this.setState((previousState) => return {
      count: previousState.count + 10

    })
    // this.setState{{ count: this.state.count + 1 }}}
    // this.setState({ count: 2 });
    // this.state.count = 2;
  }

  handleDefend() {
    alert("Defend clicked");
    this.setState{{ count: this.state.count - 1 }}}
    // this.setState({ count: 2 });
  render() {
    return (
      <div className="row text-black">
        <h1>Counter: {this.state.count}</h1>
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
