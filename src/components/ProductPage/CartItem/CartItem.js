import React,{Component} from 'react'
import {Row,Col} from 'react-bootstrap'

class CartItem extends Component {
  render(){
    const { image ,amounts , name, price, currency, onClick } = this.props;
    return(
      <Row className="cart-item w3-animate-right" style={{'textAlign':'left','padding':'5px'}}>
            <Col xs={8} md={8}>
                <button className="w3-btn w3-ripple w3-red btn-xs" onClick={onClick}>X</button>
                <img src={image} alt="" width="30px" />
                <span className="">{name}</span>
                <span className="">*{amounts}</span>
            </Col>
            <Col xs={4} md={4} className="">{price*amounts} {currency}</Col>
      </Row>
    )
  }
}

export default CartItem
