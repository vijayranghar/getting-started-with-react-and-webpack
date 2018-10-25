import styled from 'styled-components'

export const Container = styled.section`
  {
    max-width: 1200px;
    margin: 60px auto;
    font-size: 0;
  }
`
export const Title = styled.h4`
  {
    text-transform: uppercase;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`
export const Size = styled.span`
  {
    opacity: 0;
    transition: opacity 300ms ease-in;
    display: block;
    font-size: 12px;
    font-weight: 500px;
  }
  `
export const ListItem = styled.li`
  {
    display: inline-block;
    vertical-align: top;
    width: 25%;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: border-color 400ms;
    &:hover {
      border-color: #eaeaef;
      & ${Size} {
        opacity: 1;
      }
    }
  }
`
