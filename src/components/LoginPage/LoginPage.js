import React,{Component} from 'react'
import './LoginPage.css'
import NavigationBar from '../HomePage/navHomeContainer'
import validateInput from './validation'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import setAuthorizationToken from '../setAuthorizationToken';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setPage} from '../../Dux/pages'
import ForgetAccount from '../ForgetAccount/ForgetAccount'
import ConfirmForget from '../ForgetAccount/ConfirmForget'

class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      password:'',
      errors:{},
      isLoading:false,
      message:''
    }
  }

  handleUsername(e){
    e.preventDefault()
    this.setState({username:e.target.value})
  }

  handlePassword(e){
    e.preventDefault()
    this.setState({password:e.target.value})
  }

  isValids(){
    const {errors,isValid} = validateInput(this.state)
    if(!isValid){
      this.setState({errors})
    }

    return isValid
  }

  handleLogin(e){
    e.preventDefault()
    const {username,password} = this.state
    const {setCurrentUser,history} = this.props
    if(this.isValids()){
      this.setState({
        errors:{},
        isLoading:true,
        message:''
      })
      axios.post('https://us-central1-ezycashbag.cloudfunctions.net/widgets/Login',{
        username: username,
        password: password
      })
      .then((response)=>{
        if(response.data.message === "This ID does't have"){
          this.setState({
            isLoading:false,
            message: "ไม่มี Username นี้อยู่"//,
            //show:true
          })
        }
        else if (response.data.message === "password incorrect") {
          this.setState({
            isLoading:false,
            message: "รหัสผ่านไม่ถูกต้อง"//,
            //show:true
          })
        }
        else {
          const token = response.data.token
          localStorage.setItem('jwtToken', token)
          setCurrentUser(jwt.decode(token))
          setAuthorizationToken(token)
          history.push('/'+jwt.decode(token).sponsor+'/home')
        }
      })
    }
  }

  handleNext(e){
    e.preventDefault()
    const {setPage} = this.props
    setPage('UserID',true)
  }

  render(){
    const {username,password,errors,isLoading,message} = this.state
    const {page,click} = this.props.pages
    return(
      <div className="loginContainer">
        {isLoading?
          <div className="divLoading">
            <div className="loadings centerLogin">
              <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
          </div>
          :<div></div>}
          <div>

          </div>

        {(page === 'home')?
          <div className={"cardLogin "+(click?'':'w3-animate-left')}>
            <div className="cardContainer">
              <h4><b>MEMBER LOGIN</b></h4>
              <hr className="elearn"></hr>
              <form>
                <div className="formsLogin">
                  <div className="myDivInput">
                    <input value={username} onChange={this.handleUsername.bind(this)} className="myInput" type="text" required/>
                    <label>username</label>
                  </div>
                  {(errors.username === undefined)?'':<p className="w3-animate-right">{errors.username}</p>}
                  <div className="myDivInput">

                    <input value={password} onChange={this.handlePassword.bind(this)} className="myInput" required type="password"/>
                    <label>password</label>
                  </div>
                  {(errors.password === undefined)?'':<p className="w3-animate-right">{errors.password}</p>}

                </div>
              </form>
              <div style={{'textAlign':'left'}}>
                <a href="" onClick={this.handleNext.bind(this)}>ลืมบัญชีผู้ใช้</a>
              </div>

              <p style={{'color':'red'}}>{message}</p>
              <button onClick={this.handleLogin.bind(this)} className="w3-button w3-white w3-border w3-round-large">Login</button>
            </div>
          </div>:(page === 'UserID')?<ForgetAccount/>:<ConfirmForget/>}

      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    pages: state.pages
  }
}

const mapDispatchToProps = (dispatch)=>({
  setPage:(page,click)=> dispatch(setPage(page,click))
})


export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
