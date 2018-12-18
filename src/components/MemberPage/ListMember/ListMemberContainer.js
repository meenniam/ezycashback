import {connect} from 'react-redux'
import ListMember from './ListMember'

const mapStateToProps = (state)=>{
  return {
    member: state.memberList,
    auth: state.auth
  }
}


export default connect(mapStateToProps)(ListMember)
