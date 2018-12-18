import React,{Component} from 'react'
import './ProductPage.css'
import NavigationBar from '../navigationBar'
import ProductList from './ProductList/ProductListContainer'
import {connect} from 'react-redux'
import {addProduct} from '../../Dux/products'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import ProductDetail from './ProductDetail/ProductDetailContainer'
import Cart from './Cart/CartContainer'
import {Link,Redirect} from 'react-router-dom'


class ProductPage extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const {addProduct} = this.props
    const {scrollTo} = window
    scrollTo(0, 0);
    axios.get('https://us-central1-hyorder-36a01.cloudfunctions.net/widgets/product')
    .then(resp=>{
      addProduct(resp.data)
      this.setState({isLoading:true})
    })
  }
  
  render(){
    const {user,isAuthenticate} = this.props.auth
    const {params} = this.props.match
    return(
      <div>
        {!isAuthenticate?
          <Redirect to="/"/>:
            (params.username === user.sponsor)?
              <div >
                <NavigationBar/>
                <div className="productParallax">
                  <div className="productCaption productCenter">
                    <h1>PRODUCT</h1>
                    <hr className="elearn"></hr>
                  </div>
                </div>
                <div className="productContainer">
                  <ProductDetail/>
                  <Row>
                    <Col md={9}>
                      <ProductList/>
                    </Col>
                    <Col md={3}>
                      <Cart/>
                    </Col>
                  </Row>
                </div>
              </div>:<Redirect to="/"/>}
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) =>({
    addProduct: (product) => dispatch(addProduct(product))
})

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);
