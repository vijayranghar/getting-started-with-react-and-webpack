import React from 'react'
import ReactDOM from 'react-dom'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar'
class App extends React.Component {
  render (){
    return (
      <div>
        <Navbar />
        <ProductList />
      </div>
    )
  }
}

ReactDOM.render (<App/>, document.getElementById("app") )
