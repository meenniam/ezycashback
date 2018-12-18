import {connect} from 'react-redux'
import NavHome from './navHome'
import {setCurrentUser} from '../../Dux/authen'
import {resetToCart} from '../../Dux/cart'
import {setMemberAcive} from '../../Dux/member'


const mapStateToProps = (state)=>{
  return {
    auth: state.auth,
    member: state.memberList,
    pages: state.pages
  }
}


const mapDispatchToProps = (dispatch)=>({
  setCurrentUser:(user)=> dispatch(setCurrentUser(user)),
  resetToCart:()=> dispatch(resetToCart()),
  setMemberAcive:(member)=> dispatch(setMemberAcive(member))
})

export default connect(mapStateToProps,mapDispatchToProps)(NavHome)
