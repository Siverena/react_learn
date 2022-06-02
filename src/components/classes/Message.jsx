import React, { Component } from 'react';

export class Message extends Component {
  state = {
    msg: 'msg',
  };
  handleClick = () => {
    this.setState({ msg: 'this.state.msg' });
  };

  componentDidMount() {
    console.log('component did mount');
  }
  render() {
    return (
      <>
        <div>{this.state.msg}</div>
        <div>{this.props.msg}</div>
        <button onClick={this.handleClick}>click</button>
      </>
    );
  }
}
