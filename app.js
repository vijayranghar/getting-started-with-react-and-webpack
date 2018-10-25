import React from 'react'
import ReactDOM from 'react-dom'
import ProductList from './components/ProductList'
class App extends React.Component {
  render (){
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>
          Hello world !!!!
        </h2>
        <ProductList />
      </div>
    )
  }
}

ReactDOM.render (<App/>, document.getElementById("app") )
