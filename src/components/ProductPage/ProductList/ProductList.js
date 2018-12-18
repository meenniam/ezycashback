import React ,{Component} from 'react'
import {Row,Col} from 'react-bootstrap'
import ProductItem from '../ProductItem/ProductItemContainer'
import './ProductList.css'

class ProductList extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoading:false
    }
  }
  render(){
    const {products} = this.props
    var isLoading;
    const productList = products.map((data,key)=>(
      <Col md={3} sm={6}>
        <ProductItem key={data.id} product={data}/>
      </Col>
    ))
    return(
      <div className="productListContainer">
        {(products.length===0)?
          <div className="lds-ring "><div></div><div></div><div></div><div></div></div>
          :
          <Row style={{'width':'100%'}}>
            {productList}
          </Row>}
      </div>
    )
  }
}

export default ProductList;
