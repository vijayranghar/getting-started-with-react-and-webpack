import React, { Component } from 'react'
import styled from 'styled-components'
class Navbar extends Component {
  render () {
    const NavBar = styled.nav`{
      border-top: 1px solid #333;
      border-bottom: 1px solid #333;
      padding: 20px 0;
    }`
    const UnorderedList = styled.ul`{
      padding: 0;
      list-style-type: none;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
    }`
    const UnorderedListItem = styled.li`{
      flex-basis: 20%;
    }`
    const Links = styled.a`{
      text-decoration: none;
      color: #333;
      opacity: .9;
      transition: all 300ms;
      &:hover {
        color: #000;
        opacity: 1;
        text-decoration: none;
      }
    }`
    return (
      <NavBar>
        <UnorderedList>
          <UnorderedListItem><Links href="#">Home</Links></UnorderedListItem>
          <UnorderedListItem><Links href="#">Trending products</Links></UnorderedListItem>
          <UnorderedListItem><Links href="#">Sale</Links></UnorderedListItem>
          <UnorderedListItem><Links href="#">About us</Links></UnorderedListItem>
          <UnorderedListItem><Links href="#">Contact us</Links></UnorderedListItem>
        </UnorderedList>
      </NavBar>
    )
  }
}

export default Navbar
