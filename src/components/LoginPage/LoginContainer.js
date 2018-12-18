import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import LoginPage from './LoginPage'
import {setCurrentUser} from '../../Dux/authen'

const mapStateToProps = (state)=>{
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch)=>({
  setCurrentUser: (user)=> dispatch(setCurrentUser(user))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginPage))
