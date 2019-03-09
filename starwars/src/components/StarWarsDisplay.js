import React, { Component } from 'react'

export default class StarWarsDisplay extends Component {
  render() {
      const { name, gender, hair_color, eye_color } = this.props.star
    return (
      <div>
        <h2>{ name }</h2>
        <p>{ gender }</p>
        <p>{ hair_color }</p>
        <p>{ eye_color }</p>
      </div>
    )
  }
}
