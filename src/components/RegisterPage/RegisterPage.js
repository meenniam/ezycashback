import React ,{Component} from 'react'
import './RegisterPage.css'
import {Row,Col,FormGroup,ControlLabel,FormControl,HelpBlock,Radio,Checkbox,Modal,Button} from 'react-bootstrap'
import NavigationBar from '../navigationBar'
import {Link,Redirect,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import validateInput from './validation'
import axios from 'axios'


class RegisterPage extends Component {
  constructor(props){
    super(props)
    this.state={
      sex:'ชาย',
      bankName:'กรุงไทย',
      checked: false,
      errors:{},
      fistName:'',
      lastName:'',
      idNumber:'',
      birthDate:'',
      phoneNumber:'',
      accountNumber:'',
      address:'',
      road:'',
      tumbol:'',
      amper:'',
      jangwad:'',
      postNumber:'',
      bDate:'',
      isLoading:false,
      show:true,
      showEnd: false,
      message:''
    }
  }

  componentDidMount(){
    var today = new Date();
    var yyyy = today.getFullYear();
    var byyyy = parseInt(yyyy) - 1
    today =byyyy.toString()+ '-' +12 + '-' + 31;
    this.setState({bDate: today})

  }

  onRadioChange(value){
    this.setState({sex:value})
  }

  handleChoose(e){
    this.setState({bankName: e.target.value})
  }

  handleCheck(e){
    this.setState({checked: !this.state.checked})
  }

  handleFistName(e){
    this.setState({fistName: e.target.value})
  }
  handleLastName(e){
    this.setState({lastName: e.target.value})
  }
  handleIdNumber(e){
    this.setState({idNumber: e.target.value})
  }
  handleBirthDate(e){
    this.setState({birthDate: e.target.value})
  }

  handlePhoneNumber(e){
    this.setState({phoneNumber: e.target.value})
  }
  handleAccountNumber(e){
    this.setState({accountNumber: e.target.value})
  }
  handleAddress(e){
    this.setState({address: e.target.value})
  }
  handleRoad(e){
    this.setState({road: e.target.value})
  }
  handleTumbol(e){
    this.setState({tumbol: e.target.value})
  }

  handleAmper(e){
    this.setState({amper: e.target.value})
  }

  handleJangwad(e){
    this.setState({jangwad: e.target.value})
  }

  handlePostNumber(e){
    this.setState({postNumber: e.target.value})
  }

  isValid(){
    const {errors,isValid} = validateInput(this.state)
    if(!isValid){
      this.setState({errors})
    }

    return isValid
  }

  handleClick(e){
    e.preventDefault()
    const {user,isAuthenticate} = this.props.auth
    //const {location} = window
    const {params} = this.props.match
    const {sex,bankName,checked,errors,fistName,lastName,idNumber,birthDate,phoneNumber,accountNumber,address,road,tumbol,amper,jangwad,postNumber} = this.state
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd = '0'+dd
    }
    if(mm<10) {
        mm = '0'+mm
    }
    today =yyyy+ '-' +mm + '-' + dd;
    if(this.isValid()){
      this.setState({
        errors:{},
        isLoading:true,
        message:''
      })
      axios.post('https://us-central1-ezycashbag.cloudfunctions.net/widgets/Regist/',{
        username: user.username,
        sponsor:params.username,
        fname:fistName,
        lname:lastName,
        phone:phoneNumber,
        identityNumber:idNumber,
        sex:sex,
        birthday:birthDate,
        bankName : bankName,
        bankID : accountNumber,
        address:address,
        street:road,
        province:jangwad,
        tumbon:tumbol,
        district:amper,
        postalCode:postNumber,
        dayRegist :today,
        showName: checked
      })
      .then(response=>{
        console.log(response);
        if(response.data.message === 'Successfully created new user'){
          //location.href= '/'
          this.setState({showEnd:!this.state.showEnd})
        }
        else {
          this.setState({
            message:'เลขบัตรประชาชนของถูกใช้แล้ว',
            isLoading:false
          })
        }
      })
    }
  }

  handleClose(){
    const {history} = this.props
    const {params} = this.props.match
    this.setState({show:!this.state.show})
    history.push('/'+params.username+'/')
  }

  handleEnd(){
    const {location} = window
    this.setState({showEnd:!this.state.showEnd})
    location.href= '/'
  }


  render(){
    const {user,isAuthenticate} = this.props.auth
    const {params} = this.props.match
    const {message,isLoading,bDate,errors,fistName,lastName,idNumber,birthDate,phoneNumber,accountNumber,address,road,tumbol,amper,jangwad,postNumber} = this.state
    return(
      <div>
        {!isAuthenticate?
          <Redirect to="/"/>:
            (params.username === user.sponsor)?
              <div className="registerContainer">
                {isLoading?
                  <div className="divLoading">
                    <div className="loadings centerLogin">
                      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                  </div>
                  :<div></div>}
                  <NavigationBar/>
                  {(params.username === user.username)?
                    <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                      <Modal.Body>
                        <h3>ข้อความ</h3><br></br>
                        <div>
                          ท่านได้ทำการลงเบียนแล้ว ไม่สามารถลงทะเบียนซ้ำได้
                        </div>
                        <br></br>
                        <div style={{'textAlign':'right'}}>
                          <button className="w3-btn w3-ripple w3-blue" onClick={this.handleClose.bind(this)}>ปิด</button>
                        </div>

                      </Modal.Body>
                    </Modal>
                    :
                    <div>

                      <div className="cardRegister">
                        <Modal show={this.state.showEnd} onHide={this.handleEnd.bind(this)}>
                          <Modal.Body>
                            <h3>ลงทะเบียนเรียบร้อยแล้ว</h3><br></br>
                            <div>
                              กรุณาเข้าสู่ระบบใหม่อีกครั้ง
                            </div>
                            <br></br>
                            <div style={{'textAlign':'right'}}>
                              <button className="w3-btn w3-ripple w3-blue" onClick={this.handleEnd.bind(this)}>ปิด</button>
                            </div>
                          </Modal.Body>
                        </Modal>

                        <h1>ลงทะเบียนร่วมธุรกิจ</h1>
                        <hr className="elearn"></hr>
                        <Row className="show-grid" >
                          <Col sm={3} md={3} style={{'padding':'30px'}}>
                            <div className="bordbottom">

                              <h3>ข้อมูลผู้สมัคร</h3>
                            </div>
                            <div className="animation-element ">
                              <form>
                                <div className="formsRegis">
                                  <div className="colRegis-3">
                                    <h3>ชื่อ</h3>
                                  <input value={fistName} onChange={this.handleFistName.bind(this)} className="effect-1" type="text" placeholder="Placeholder Text"/>
                                    <span className="focus-border"></span>
                                  <p style={{'color':'red'}}>{errors.fistName}</p>
                                  </div>
                                  <div className="colRegis-3">
                                    <h3>นามสกุล</h3>
                                  <input value={lastName} onChange={this.handleLastName.bind(this)} className="effect-1" type="text" placeholder="Placeholder Text"/>
                                    <span className="focus-border"></span>
                                  <p style={{'color':'red'}}>{errors.lastName}</p>
                                  </div>
                                  <div className="colRegis-3">
                                    <h3>เลขบัตรประชาชน</h3>
                                  <input value={idNumber} onChange={this.handleIdNumber.bind(this)} className="effect-1" type="number" placeholder="Placeholder Text"/>
                                    <span className="focus-border"></span>
                                  <p style={{'color':'red'}}>{errors.idNumber}</p>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </Col>
                          <hr className="vlleft"></hr>
                          <Col sm={3} md={3} style={{'padding':'30px'}}>
                            <div className="bordbottom">

                              <h3>ข้อมูลส่วนตัว</h3>
                            </div>
                            <div className="animation-element ">
                              <form>
                                <div className="formsRegis">
                                  <div className="colRegis-3">
                                    <h3>เพศ</h3>
                                    <FormGroup>
                                      <Radio value="ชาย" checked={this.state.sex === 'ชาย'} onChange={(e) => this.onRadioChange('ชาย')}  name="radioGroup" inline>
                                        ชาย
                                      </Radio>{' '}
                                      <Radio value="หญิง" checked={this.state.sex === 'หญิง'} onChange={(e) => this.onRadioChange('หญิง')} name="radioGroup" inline>
                                        หญิง
                                      </Radio>
                                    </FormGroup>
                                  </div>
                                  <div className="colRegis-3">
                                    <h3>วันเกิด</h3><HelpBlock>(ตัวอย่าง 01/01/2018 คือ 1 มกราคม 2018)</HelpBlock>
                                  <input value={birthDate} onChange={this.handleBirthDate.bind(this)} className="effect-1" type="date" max={bDate}  min="1900-01-01" placeholder="ววดดปปปป"/>
                                    <span className="focus-border"></span>
                                  <p style={{'color':'red'}}>{errors.birthDate}</p>
                                  </div>
                                  <div className="colRegis-3">
                                    <h3>เบอร์มือถือ</h3>
                                  <input value={phoneNumber} onChange={this.handlePhoneNumber.bind(this)} className="effect-1" type="text" placeholder="Placeholder Text"/>
                                    <span className="focus-border"></span>
                                  <p style={{'color':'red'}}>{errors.phoneNumber}</p>
                                  </div>
                                  <div className="colRegis-3">
                                    <FormGroup controlId="formControlsSelect">
                                      <ControlLabel>ธนาคาร</ControlLabel>
                                    <FormControl value={this.state.bankName} onChange={this.handleChoose.bind(this)} componentClass="select" placeholder="select">
                                        <option value="..." disabled>...</option>
                                        <option value="กรุงไทย">กรุงไทย</option>
                                        <option value="กรุงเทพ">กรุงเทพ</option>
                                      </FormControl>
                                    </FormGroup>
                                  </div>
                                  <div className="colRegis-3">
                                    <h3>เลขบัญชีรับโบนัส</h3>
                                  <input value={accountNumber} onChange={this.handleAccountNumber.bind(this)} className="effect-1" type="number" placeholder="Placeholder Text"/>
                                    <span className="focus-border"></span>
                                  <p style={{'color':'red'}}>{errors.accountNumber}</p>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </Col>
                          <hr className="vlright"></hr>
                          <Col sm={6} md={6} style={{'padding':'30px'}}>
                            <div className="bordbottom">

                              <h3>ที่อยู่หลัก</h3>
                            </div>
                            <div className="animation-element ">
                              <form>
                                <div className="formsRegis">
                                  <div className="colRegis-3">
                                    <h3>ที่อยู่</h3>
                                  <input value={address} onChange={this.handleAddress.bind(this)} className="effect-1" type="text" placeholder="Placeholder Text"/>
                                    <span className="focus-border"></span>
                                  <p style={{'color':'red'}}>{errors.address}</p>
                                  </div>
                                  <Row>
                                    <Col sm={6} md={6}>
                                      <div className="colRegis-3">
                                        <h3>ถนน</h3>
                                      <input value={road} onChange={this.handleRoad.bind(this)} className="effect-1" type="text" placeholder="Placeholder Text"/>
                                        <span className="focus-border"></span>
                                      </div>
                                      <div className="colRegis-3">
                                        <h3>แขวง/ตำบล</h3>
                                      <input value={tumbol} onChange={this.handleTumbol.bind(this)} className="effect-1" type="text" placeholder="Placeholder Text"/>
                                        <span className="focus-border"></span>
                                      <p style={{'color':'red'}}>{errors.tumbol}</p>
                                      </div>
                                      <div className="colRegis-3">
                                        <h3>เขต/อำเภอ</h3>
                                      <input value={amper} onChange={this.handleAmper.bind(this)} className="effect-1" type="text" placeholder="Placeholder Text"/>
                                        <span className="focus-border"></span>
                                      <p style={{'color':'red'}}>{errors.amper}</p>
                                      </div>
                                    </Col>
                                    <Col sm={6} md={6}>
                                      <div className="colRegis-3">
                                        <h3>จังหวัด</h3>
                                      <input value={jangwad} onChange={this.handleJangwad.bind(this)} className="effect-1" type="text" placeholder="Placeholder Text"/>
                                        <span className="focus-border"></span>
                                      <p style={{'color':'red'}}>{errors.jangwad}</p>
                                      </div>
                                      <div className="colRegis-3">
                                        <h3>รหัสไปรษณีย์</h3>
                                      <input value={postNumber} onChange={this.handlePostNumber.bind(this)} className="effect-1" type="number" placeholder="Placeholder Text"/>
                                        <span className="focus-border"></span>
                                      <p style={{'color':'red'}}>{errors.postNumber}</p>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </form>
                            </div>
                            <div style={{'textAlign':'center'}}>
                              <Checkbox onChange={this.handleCheck.bind(this)} defaultChecked={this.state.checked}>
                                ต้องการใช้ชื่อจริงหรือใช้ username แสดงบนผังสายงาน binary
                              </Checkbox>
                              <p style={{'color':'red'}}>{message}</p>
                              <button onClick={this.handleClick.bind(this)} className="w3-btn w3-ripple w3-blue">ยืนยัน</button>
                            </div>

                          </Col>
                        </Row>
                      </div>
                    </div>}



              </div>:<Redirect to="/"/>}
      </div>

    )
  }
}
const mapStateToProps = (state)=>{
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(RegisterPage)
