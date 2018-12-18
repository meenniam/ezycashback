import React,{Component} from 'react'
import './Cart.css'
import {Panel,Alert} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CartItem from '../CartItem/CartItem'
import $ from 'jquery'

class Cart extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const {items, total, currency, removeFromCart , amount , isInCart} = this.props
    var confirm;
    if(total === 0){
      confirm = (<div></div>)
    }
    else {
      confirm = (<Link to=""><button className="w3-btn w3-ripple w3-green w3-animate-right" style={{width:"100%"}}>ยืนยัน {total} {currency}</button></Link>)
    }
    return(
      <div className="cartContainer">


        <div className="cardProduct">
          <h4>Cart</h4>
          <hr className="elearn"></hr>
          {items.length > 0 && (
              <div className="">
                {items.map((item,index) => (
                    <CartItem key={item.id} amounts={amount[index]} {...item} onClick={() => removeFromCart(item.id)} />
                  ))}
              </div>
          )}
          {items.length === 0 && (
              <Alert bsStyle="info"><FontAwesomeIcon icon="shopping-cart" style={{fontSize:"30px"}}/> ตระกร้าว่าง</Alert>
          )}
          <div className="">รวม: {total} {currency}</div>
          <hr/>
          {confirm}
        </div>
      </div>
    )
  }
}

export default Cart
