import React from 'react'
import ReactDOM from 'react-dom'
import { Col,Row,Grid } from 'react-bootstrap'
import './style.scss'

class App extends React.Component {
  render (){
    return (
      <div>
        <h1>Hello World!!!!</h1>
        <Grid>
          <Row>
            <Col md={4}>
              <h2> Bootstrap Column 1</h2>
            </Col>
            <Col md={4}>
              <h2> Bootstrap Column 2</h2>
            </Col>
            <Col md={4}>
              <h2> Bootstrap Column 3</h2>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

ReactDOM.render (<App/>, document.getElementById("app") )