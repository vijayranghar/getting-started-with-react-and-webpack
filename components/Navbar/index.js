import React, { Component } from 'react'
import styled from 'styled-components'
class Navbar extends Component {
  render () {
    const NavBar = styled.nav`{
      border: 1px solid #333;
      padding: 0 20px;
    }`
    return (
      <NavBar>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Trending products</a></li>
          <li><a href="#">Sale</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </NavBar>
    )
  }
}

export default Navbar
