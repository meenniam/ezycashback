import {connect} from 'react-redux'
import ProductDetail from './ProductDetail'
import {selectedProduct} from '../../../Dux/productDetail'

const mapStateToProps = (state)=>{
  return {
    productDetail: state.productDetail
  }
}

const mapDispatchToProps = (dispatch)=>({
  selectedProduct:(id)=> dispatch(selectedProduct(id))
})


export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)
