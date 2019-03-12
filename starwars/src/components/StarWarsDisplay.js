import React, { Component } from 'react'
import './StarWars.css';


export default class StarWarsDisplay extends Component {
  render() {
      const { name, gender, hair_color, eye_color } = this.props.star
    return (
      <div  className="Card">
            <h2>{ name }</h2>
        <div className="attri">
            <p>Gender: { gender }</p>
            <p>Hair Color: { hair_color }</p>
            <p>Eye Color: { eye_color }</p>
        </div>
    </div>
    )
  }
}
