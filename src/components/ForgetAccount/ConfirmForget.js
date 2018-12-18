import React,{Component} from 'react'

import {connect} from 'react-redux'
import {setPage} from '../../Dux/pages'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import validateInput from './validationConfirm'
import {Modal} from 'react-bootstrap'


class ComfirmForget extends Component{
  constructor(props){
    super(props)
    this.state={
      password: '',
      confirmPassword:'',
      phone:'',
      isLoading:false,
      errors:{},
      message:'',
      show: false
    }
  }
  handlePassword(e){
    this.setState({
      password:e.target.value
    })
  }
  handleConfirmPassword(e){
    this.setState({
      confirmPassword:e.target.value
    })
  }
  handlePhone(e){
    this.setState({
      phone:e.target.value
    })
  }
  isValid(){
    const {errors,isValid} = validateInput(this.state)
    if(!isValid){
      this.setState({
        errors
      })
    }
    return isValid
  }
  handleNext(){
    const {phone,password,errors} = this.state
    const {dataForget} = this.props.dataForget
    if(this.isValid()){
      this.setState({
        isLoading:true,
        errors:{},
        message: ''
      })
      axios.post('https://us-central1-ezycashbag.cloudfunctions.net/widgets/Password/Chang',{
        phone: phone,
        newPassword: password,
        username: dataForget.username
      })
      .then((response)=>{
        console.log(response.data);
        if(response.data.message === 'Phone number incorrect'){
          this.setState({
            message: 'หมายเลขโทรศัพท์ไม่ถูกต้อง',
            isLoading:false
          })
          //console.log(response.data.message);
        }
        else {
          this.setState({
            show:!this.state.show
          })
        }
      })
    }

  }

  handleClose(){
    const {location} = window
    this.setState({
      show:!this.state.show
    })
    location.reload()

  }

  handlePrevious(){
    const {setPage} = this.props
    setPage('UserID')
  }
  render(){
    const {password,confirmPassword,phone,isLoading,errors,message,show} = this.state
    const {click} = this.props.pages
    const {dataForget} = this.props.dataForget
    //console.log(data.phone);
    //console.log(dataForget.phone);
    return(
      <div className={"cardForget "+(click?'w3-animate-right':'w3-animate-left')}>
        <div className="cardContainer">
          <Modal show={show} onHide={this.handleClose.bind(this)}>
            <Modal.Body>
              <h3>รีเซ็ตรหัสผ่านสำเร็จ</h3><br></br>
              <div>
                ท่านสามารถเข้าสู่ระบบโดยใช้รหัสผ่านใหม่ของท่าน
              </div>
              <br></br>
              <div style={{'textAlign':'right'}}>
                <button className="w3-btn w3-ripple w3-blue" onClick={this.handleClose.bind(this)}>ปิด</button>
              </div>
            </Modal.Body>

          </Modal>
          {isLoading?
            <div className="divLoading">
              <div className="loadings centerLogin">
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
              </div>
            </div>
            :<div></div>}
          <h4><b>ตรวจสอบข้อมูล</b></h4>
          <hr className="elearn"></hr>
          <Row>
            <Col className='borderRight' sm={7}>
              <form>
                <div className="formsLogin">
                  <div className="colLogin-3">
                    <h4>กรอกรหัสผ่านใหม่</h4>
                    <input value={password} onChange={this.handlePassword.bind(this)} className="effect-1" type="password" placeholder="Placeholder Text"/>
                    <span className="focus-border"></span>
                    <p>{errors.password}</p>
                  </div>
                  <div className="colLogin-3">
                    <h4>ยืนยันรหัสผ่าน</h4>
                    <input value={confirmPassword} onChange={this.handleConfirmPassword.bind(this)} className="effect-1" type="password" placeholder="Placeholder Text"/>
                    <span className="focus-border"></span>
                    <p>{errors.confirmPassword}</p>
                  </div>
                  <div className="colLogin-3">
                    <h4>กรอกเลขท้าย 4 ตัวของหมายเลขโทรศัพท์ของท่านดังนี้</h4>
                    <p>เบอร์: *** *** **{dataForget.phone} </p>
                    <input value={phone} onChange={this.handlePhone.bind(this)} className="effect-1" type="password" placeholder="Placeholder Text"/>
                    <span className="focus-border"></span>
                    <p>{errors.phone}</p>
                  </div>
                </div>
              </form>
              <br></br>
            </Col>
            <Col sm={5}>
              <img width="100px" src={dataForget.immage} alt="Avatar"/>
              <h3>{dataForget.username}</h3>
            </Col>
          </Row>
          <p style={{'color':'red'}}>{message}</p>
          <button onClick={this.handlePrevious.bind(this)} className="w3-button w3-white w3-border w3-round-large">ย้อนกลับ</button>
        &nbsp;<button onClick={this.handleNext.bind(this)} className="w3-button w3-white w3-border w3-round-large">ยืนยัน</button>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state)=>{
  return {
    pages: state.pages,
    dataForget: state.dataForget
  }
}

const mapDispatchToProps=(dispatch)=>({
  setPage: (page)=> dispatch(setPage(page))
})

export default connect(mapStateToProps,mapDispatchToProps)(ComfirmForget)
