import React,{Component} from 'react'
import './ProductDetail.css'
import PropTypes from 'prop-types';
import ProductSmall from './ProductSmall'
import data from '../../../data/product'
import datDetail from '../../../data/productDetail'
import $ from 'jquery'

class ProductDetail extends Component{
  constructor(props){
    super(props)
    this.state={
      productsGall:data,
      dataDetail:datDetail
    }
  }


  render(){
    const {productDetail}= this.props
    const {productsGall,dataDetail} = this.state
    var products
    if(productDetail.selectPro.id){
      products = productsGall[productDetail.selectPro.id-1].image.map((data,key)=>(
        <ProductSmall data={data} key={key} id={key}/>
      ))
    }


    return(
      <div>
        {productDetail.selectPro.selectpro?(
          <div id="detail" className="productDetailContainer w3-animate-right">
            <div className="row" style={{'padding':'15px'}}>
              <div className="column-1-2" style={{'backgroundColor':'#fff'}}>
                <div className="row">
                  <div className="column-1-4">
                    {products}
                  </div>
                  <div className="column-3-4">
                    <a id="top"></a><img className="zoomImg" width="100%" height="80%" src={productsGall[productDetail.selectPro.id-1].image[productDetail.selected-1]}></img>
                  </div>
                </div>


              </div>
              <div className="column-1-2" style={{'backgroundColor':'#fff'}}>
                <div>
                  <h1 className="elearn"> Product Detail</h1>
                  <hr className="elearn"></hr>
                  <p className="elearn">All modern browsers support the following 140 color names (click on a color name, or a hex value, to view the color as the background-color along with different text colors):</p>
                </div>
                <hr/>
              </div>

            </div>
          </div>
        ):(<div></div>)}
      </div>

    )
  }
}
export default ProductDetail;
