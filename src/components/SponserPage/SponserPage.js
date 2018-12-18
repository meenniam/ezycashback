import React,{Component} from 'react'
import './SponserPage.css'
import axios from 'axios'
import {Redirect,withRouter} from 'react-router-dom'
import validateInput from './validation'
import {Modal} from 'react-bootstrap'

class SponserPage extends Component{
  constructor(props){
    super(props)
    this.state= {
      sponsor: {},
      isLoading: true,
      username:'',
      password:'',
      message: '',
      isSubmit:false,
      errors:{},
      show:false,
      confirmPassword:''
    }
  }


  componentDidMount(){
    const {params} = this.props.match
    axios.get('https://us-central1-ezycashbag.cloudfunctions.net/widgets/Check/'+params.username)
    .then((response)=>{
      this.setState({sponsor: response.data,isLoading:false})
    })
  }

  handleUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  isValids(){
    const {errors,isValid} = validateInput(this.state)
    if(!isValid){
      this.setState({errors})
    }
    return isValid
  }

  handleClick(e){
    e.preventDefault()
    const {username,password,isSubmit} = this.state
    const {params} = this.props.match
    const {history} = this.props
    if(this.isValids()){
      this.setState({
        errors:{},
        isSubmit:true,
        message:''
      })
      axios.post('https://us-central1-ezycashbag.cloudfunctions.net/widgets/RegistFree',{
        username: username,
        password: password,
        sponser: params.username
      })
      .then((response)=>{
        if(response.data.message === 'This username is exists'){
          this.setState({message: 'ขออภัย ชื่อบัญชีนี้ถูกใช้ไปแล้ว กรุณาใช้เป็นชื่ออื่นแทน',isSubmit:false})
        }
        else{
          this.setState({show:!this.state.show})
        }
      })
    }

  }

  handleClose(){
    this.setState({show:!this.state.show})
    const {history} = this.props
    history.push('/')
  }

  handleConfirmPassword(e){
    this.setState({
      confirmPassword:e.target.value
    })
  }

  render(){
    const {show,sponsor,isLoading,username,password,message,isSubmit,errors,confirmPassword} = this.state
    console.log(sponsor.sponsor);
    return(
      <div>
        {isLoading?
          <div className="spon-flex"><div className="lds-ring "><div></div><div></div><div></div><div></div></div></div>
          :sponsor.sponsor?
            <div className="sponserContainer">
              {isSubmit?
                <div className="divLoading">
                  <div className="loadings centerLogin">
                    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                  </div>
                </div>
                :<div></div>}
              <div className="cardSponser">
                <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                  <Modal.Body>
                    <h3>ลงทะเบียนสำเร็จ</h3><br></br>
                    <div>
                      ท่านสามารถใช้ username และ password ที่ท่านได้ทำการลงทะเบียน เข้าสู่ระบบได้ทันที
                    </div>
                    <br></br>
                    <div style={{'textAlign':'right'}}>
                      <button className="w3-btn w3-ripple w3-blue" onClick={this.handleClose.bind(this)}>ปิด</button>
                    </div>
                  </Modal.Body>
                </Modal>
                <div className="head">
                  <h1>SPONSER PAGE</h1>
                  <hr className="elearn"></hr>
                  <p>347 success system คือ ระบบสร้างรายได้ 180 วัน 1 ล้าน เพียงแค่เป็นสมาชิกกับเรา ฟรี ทำตามขั้นตอน ง่าย ๆ</p>
                  <br/>
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/PMpCIdRHMdA" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                  <hr></hr>
                </div>
                <div className="title">
                  สนใจทดลองใช้งานฟรี
                </div>

                <div className="forms">
                  <div className="col-3">
                    <h3>username</h3>
                    <input onChange={this.handleUsername.bind(this)} value={username}className="effect-1" type="text" placeholder="Placeholder Text"/>
                    <span className="focus-border"></span>
                    <p style={{'color':'red'}}>{errors.username}</p>
                  </div>
                  <div className="col-3">
                    <h3>รหัสผ่าน</h3>
                    <input onChange={this.handlePassword.bind(this)} value={password} className="effect-1" type="password" placeholder="Placeholder Text"/>
                    <span className="focus-border"></span>
                    <p style={{'color':'red'}}>{errors.password}</p>
                  </div>
                  <div className="col-3">
                    <h3>ยืนยันรหัส</h3>
                    <input onChange={this.handleConfirmPassword.bind(this)} value={confirmPassword} className="effect-1" type="password" placeholder="Placeholder Text"/>
                    <span className="focus-border"></span>
                    <p style={{'color':'red'}}>{errors.confirmPassword}</p>
                  </div>
                  <p style={{'color':'red'}}>{message}</p>
                  <div className="col-3">
                    <button onClick={this.handleClick.bind(this)} className="w3-btn w3-ripple w3-blue">ยืนยัน</button>
                  </div>
                </div>
              </div>
            </div>:<div style={{'textAlign':'center'}}><h1>ERROR</h1></div>}
      </div>


    )
  }
}

export default withRouter(SponserPage)
