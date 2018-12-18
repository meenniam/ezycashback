import React ,{Component} from 'react'
import './ProductItem.css'
import {Row,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProductItem extends Component{
  constructor(props){
    super(props)
    this.state={
      amount:1
    }
    const {selectProduct,product} = this.props
    selectProduct(false,1)
  }

  handleClick(){
    const { product,addToCart, removeFromCart,isInCart} = this.props
    const {amount} = this.state
    if (isInCart) {
        removeFromCart(product.id);
    } else {
        addToCart(product.id,amount);
    }
  }

  handleDecrease(e){
      //var decrease = parseInt(e.target.value)-1;
      const {product,removeFromCart, isInCart } = this.props;
      if (isInCart) {
          removeFromCart(product.id);
      }
      if(this.state.amount!== 0){
        this.setState({
          amount: this.state.amount-1
        })
      }
      else {
        this.setState({
          amount: 0
        })
      }
    }

    handleIncrease(e){
      //var increase = parseInt(e.target.value)+1
      const {product,removeFromCart, isInCart } = this.props;
      if (isInCart) {
          removeFromCart(product.id);
      }
      this.setState({
        amount:this.state.amount+1
      })
    }

    handleNum(e){
      //const {price } = this.props;
      this.setState({
        amount:e.target.value
      })
    }

    handleImage(){
      const {selectProduct,product} = this.props
      selectProduct(true,product.id)
    }

  render(){
    const {product,isInCart} = this.props
    return(
      <div className="cardProduct">
        <a href="#top" onClick={this.handleImage.bind(this)}>
          <img className="zoomImg" style={{height:"200px"}} src={product.image}></img>
        </a>
        <h4>{product.name}</h4>
        <hr className="elearn"></hr>
        <Row>
          <Col md={3} xs={3}>
            <a onClick={this.handleIncrease.bind(this)} style={{fontSize: "2rem"}}><FontAwesomeIcon icon="plus-circle"/></a>
          </Col>
          <Col md={6} xs={6}>
              <input className="form-control" type="number" value={this.state.amount} onChange={this.handleNum.bind(this)}/>
          </Col>
          <Col md={3} xs={3}>
            <a onClick={this.handleDecrease.bind(this)} style={{fontSize: "2rem"}}><FontAwesomeIcon icon="minus-circle"/></a>
          </Col>
        </Row>
        <button
            className={isInCart ? 'w3-btn w3-ripple w3-red w3-animate-top' : 'w3-btn w3-ripple w3-blue w3-animate-left'}
            onClick={this.handleClick.bind(this)}
        >
            {isInCart ? 'นำออก' : 'เพิ่มเข้า'}
        </button>
      </div>
    )
  }
}

export default ProductItem
