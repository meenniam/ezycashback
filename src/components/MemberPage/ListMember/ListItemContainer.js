import {connect} from 'react-redux'
import ListItem from './ListItem'
import {removeMemberAcive} from '../../../Dux/member'

const mapStateToProps = (state)=>{
  return {

  }
}

const mapDispatchToProps = (dispatch)=>({
  removeMemberAcive:(member)=>dispatch(removeMemberAcive(member))
})


export default connect(mapStateToProps,mapDispatchToProps)(ListItem)
