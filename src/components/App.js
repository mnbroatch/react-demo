import React, { Component } from 'react'
import { Link } from 'react-router'
import NavBar from './NavBar'

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="text-center">
        <NavBar />
        {this.props.children}
      </div>
    )
  }
}
