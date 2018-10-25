import React, { Component } from 'react'
import { Container, ListItem, Size, Title } from './test.js'

import './style.scss'

class ProductList extends Component {
  render () {
    return (
      <Container>
          <ul>
            <ListItem>
              <img src="https://image.ibb.co/k6beD0/image1.png" alt=""/>
              <Title>Navy Blue Checked Casual Shirt</Title>
              <span className="price">Rs. 1599</span>
              <Size> Sizes S M L XL</Size>
            </ListItem>
            <ListItem>
              <img src="https://image.ibb.co/fD9MRL/image2.png" alt=""/>
              <Title>Maroon Checked Casual Shirt</Title>
              <span className="price">Rs. 1999</span>
              <Size> Sizes S M L XL</Size>
            </ListItem>
            <ListItem>
              <img src="https://image.ibb.co/hnN86L/image3.png" alt=""/>
              <Title>Checked Casual Shirt</Title>
              <span className="price">Rs. 1399</span>
              <Size> Sizes S M L XL</Size>
            </ListItem>
            <ListItem>
              <img src="https://image.ibb.co/iMVH0f/image4.png" alt=""/>
              <Title>Checked Casual Shirt</Title>
              <span className="price">Rs. 1399</span>
              <Size> Sizes S M L XL</Size>
            </ListItem>
            <ListItem>
              <img src="https://image.ibb.co/dKXH0f/image4.png" alt=""/>
              <Title>Navy Blue Checked Casual Shirt</Title>
              <span className="price">Rs. 1599</span>
              <Size> Sizes S M L XL</Size>
            </ListItem>
            <ListItem>
              <img src="https://image.ibb.co/cdST6L/image5.png" alt=""/>
              <Title>Maroon Checked Casual Shirt</Title>
              <span className="price">Rs. 1999</span>
              <Size> Sizes S M L XL</Size>
            </ListItem>
            <ListItem>
              <img src="https://image.ibb.co/hnN86L/image3.png" alt=""/>
              <Title>Checked Casual Shirt</Title>
              <span className="price">Rs. 1399</span>
              <Size> Sizes S M L XL</Size>
            </ListItem>
            <ListItem>
              <img src="https://image.ibb.co/k1YeD0/image6.png" alt=""/>
              <Title>Checked Casual Shirt</Title>
              <span className="price">Rs. 1399</span>
              <Size> Sizes S M L XL</Size>
            </ListItem>
        </ul>
      </Container>
    )
  }
}

export default ProductList
