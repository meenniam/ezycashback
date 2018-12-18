import React,{Component} from 'react'
import './ProductDetail.css'
import {connect} from 'react-redux'
import {selectedProduct} from '../../../Dux/productDetail'

class ProductSmall extends Component{
  constructor(props){
    super(props)
  }

  componentWillReceiveProps(nextProps){
    const {selectedProduct} = this.props;
    selectedProduct(1)
  }

  handleSelect(){
    const {selectedProduct,id} = this.props;
    selectedProduct(id+1)
  }

  render(){
    const {data,id} = this.props
    return(
      <div className="smallImg">
        <a onClick={this.handleSelect.bind(this)}>
          <img className="zoomImg imgBorder" width="100%" src={data}></img>
        </a>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {}
}

const mapDispatchToProps = (dispatch)=>{
  return {
    selectedProduct: (id)=> dispatch(selectedProduct(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductSmall)
