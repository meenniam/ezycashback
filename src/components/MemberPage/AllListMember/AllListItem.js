import React,{Component} from 'react'



class AllListMember extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const {list,id} = this.props
    return(
      <tr>
        <td>{id}</td>
        <td>{list.dayRegist}</td>
        <td>-</td>
        <td>{list.username}</td>
        <td>{list.sponser}</td>
        <td>{list.registered?'active':'wait'}</td>
        <td>{list.dateLineBuy}</td>
        <td>{list.buy?'':'ยังไม่ได้ซื้อสินค้า'}</td>
      </tr>
    )
  }
}

export default AllListMember
