import {connect} from 'react-redux'
import {isInCart,addToCart,removeFromCart} from '../../../Dux/cart'
import {selectProduct} from '../../../Dux/productDetail'
import ProductItem from './ProductItem'

const mapStateToProps = (state,props)=>{
  return{
    isInCart: isInCart(state,props.product)
  }
}

const mapDispatchToProps = (dispatch)=>({
  addToCart:(id,amount)=> dispatch(addToCart(id,amount)),
  removeFromCart:(id)=> dispatch(removeFromCart(id)),
  selectProduct:(val,id)=> dispatch(selectProduct(val,id))
})

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem)
