import React, { Component } from 'react'

export default class Main extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <p>Heyyyy!!!</p>
      </div>
    )
  }
}


function toggleBoolean(thing, value) {
  this.setState({ {thing}: value })
}
