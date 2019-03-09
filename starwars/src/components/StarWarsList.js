import React, { Component } from 'react'
import StarWarsDisplay from './StarWarsDisplay';

export default class StarWarsList extends Component {
render() {
    console.log(this.props.star)
    return (
        this.props.star.map((star, index) => (
            <StarWarsDisplay key={index} star={star}/>
        ))

    )
}
}


