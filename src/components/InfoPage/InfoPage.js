import React,{Component} from 'react'
import './InfoPage.css'
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {Row,Col,ProgressBar} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import isEmpty from 'lodash/isEmpty'
import {setProfile} from '../../Dux/profile'
import NavigationBar from '../navigationBar'


class InfoUsPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectFile:null,
      file: '',
      choose:false,
      upload:false,
      now: 0,
      modify:false,
      isLoading:true
    }
  }

  componentDidMount(){
    const {setProfile} = this.props
    const {scrollTo} = window
    scrollTo(0, 0);
    axios.get('https://us-central1-ezycashbag.cloudfunctions.net/widgets/Profile')
    .then(response=>{
      this.setState({isLoading:false})
      setProfile(response.data)
    })
  }

  fileSelectHandler(e){
    this.setState({
      selectFile:e.target.files[0],
      file: URL.createObjectURL(e.target.files[0]),
      choose:true,
    })

    //console.log(e.target.files[0]);
  }
  fileChangeHandler(e){
    this.setState({
      selectFile:e.target.files[0],
      file: URL.createObjectURL(e.target.files[0]),
      choose:true,
      modify:true
    })
  }

  fileUploadHandler(){
    var formData = new FormData();
    const {location}  =window
    formData.append('file', this.state.selectFile,this.state.selectFile.name);
    this.setState({
      upload:true
    })
    const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
    axios.post('https://us-central1-ezycashbag.cloudfunctions.net/widgets/upload',formData,{
      onUploadProgress: progressEvent =>{
        console.log('Uploaded :'+Math.round(progressEvent.loaded/progressEvent.total*100));
        this.setState({
          now:Math.round(progressEvent.loaded/progressEvent.total*100)
        })
      }
    })
    .then(response=>{
      console.log(response.data);
      if(response.data.message ==='success'){
        location.reload()
      }
    })
    /*let reader = new FileReader()
    reader.readAsDataURL(this.state.selectFile)
    reader.onload=(e)=>{
      //console.log(e.target.result);
      return axios.post('https://us-central1-ezycashbag.cloudfunctions.net/widgets/Profile/upload',{file:e.target.result},config,{
                onUploadProgress: progressEvent =>{
                  console.log('Uploaded :'+Math.round(progressEvent.loaded/progressEvent.total*100)+'%');
                }
              })
              .then(response=>{
                console.log(response);
              })
    }*/
  }

  render(){
    const {user,isAuthenticate} = this.props.auth
    const {profile} = this.props.profile
    const {params} = this.props.match
    const {now,isLoading} = this.state
    //console.log(this.state.file.length);
    return(
      <div className="">
        {!isAuthenticate?
          <Redirect to="/"/>:
            (params.username === user.username)?
              <div >
                {(now === 100)?
                  <div className="divLoading">
                    <div className="loadings centerLogin">
                      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                  </div>:''}
                <NavigationBar/>
                <div className="InfoParallax">
                  <div className="InfoCaption InfoCenter">
                    <h1>Personal Info</h1>
                    <hr className="elearn"></hr>
                  </div>
                </div>
                <div className="InfoContainer">
                  <Row>
                    <Col sm={4} md={4}>
                      <div>
                        <h3 style={{'color':'#00BFFF'}}>MY STORY</h3>
                        <hr className=""></hr>
                      </div>
                      <div style={{'color':'#696969'}}>
                        <p>
                          347 success system คือ ระบบสร้างรายได้ 180 วัน 1 ล้าน เพียงแค่เป็นสมาชิกกับเรา ฟรี ทำตามขั้นตอน ง่าย ๆ 3 ขั้นตอน คือ
                          1. เรา ส่งเวบไซน์ให้เพื่อนที่เรารักหรือเพื่อนที่ต้องการมีรายได้ต่อเดือน 100,000 บาทขึ้นไป สามารถส่งได้ไม่จำกัด แต่เราต้องการเพียง 4 ท่านเท่านั้น ที่เข้าร่วมโครงการ กับเรา
                          2. เมื่อทุกคนสมัครสมาชิกครบ 30 วัน ทุกคนเลือกซื้อสินค้าตามแพ็คเกจ ตามความต้องการ
                          3. รับคอมมิสชั่น จากการซื้อสินค้าของสมาชิก โดยผ่านทางธนาคารที่ท่านได้แจ้งไว
                        </p>
                      </div>

                    </Col>
                    <Col sm={4} md={4}>
                      <div className="imgProfile">

                        {isLoading?'':(profile.imageProfile===undefined)?
                          <div>
                            {this.state.choose?
                              <img  style={{'maxWidth':'100%','maxHeight':'400px'}} className="w3-animate-right"  src={this.state.file}></img>:
                                <div className="divImgUploader">
                                  <input className="imgUploader" type="file" accept="image/x-png,image/gif,image/jpeg" onChange={this.fileSelectHandler.bind(this)}>
                                  </input>
                                  <i className="fa fa-camera fa-3x"></i>
                                </div>}
                          </div>
                          :
                          <img  style={{'maxWidth':'100%','maxHeight':'400px'}} src={profile.imageProfile}></img>}

                      </div>
                      <div>
                        {(profile.imageProfile===undefined)?
                          <div>
                            {(this.state.file.length === 0)?
                              '':
                              <div className="divImgChange">
                                <input className="imgUploader" type="file" accept="image/x-png,image/gif,image/jpeg" onChange={this.fileChangeHandler.bind(this)}>
                                </input>
                                เปลี่ยนรูปภาพ<i className="fa fa-camera"></i>
                              </div>}
                          </div>:
                          <div className="divImgChange">
                            <input className="imgUploader" type="file" accept="image/x-png,image/gif,image/jpeg" onChange={this.fileChangeHandler.bind(this)}>
                            </input>
                            เปลี่ยนรูปภาพ<i className="fa fa-camera"></i>
                          </div>}
                      </div>
                      <div style={{'width':'85%'}}>
                        {this.state.upload?
                          <ProgressBar striped bsStyle="info" active  now={now} label={`${now}%`} />:''}
                      </div>
                      <div>
                        {this.state.modify?<img width="50%" height="" src={this.state.file}></img>:''}
                      </div>

                      <div>
                        {this.state.choose?
                          <button type="button" className="w3-btn w3-ripple w3-blue" onClick={this.fileUploadHandler.bind(this)}>upload</button>
                          :''}
                      </div>

                    </Col>
                    <Col sm={4} md={4}>
                      <div>
                        <h3 style={{'color':'#00BFFF'}}>PERSONAL INFOMATION</h3>
                        <hr className=""></hr>
                      </div>
                      <div className="perInfo">
                        <Row>
                          <Col xs={3} md={3}>
                            <p>ชื่อ: </p>
                          </Col>
                          <Col xs={9} md={9}>
                            <p>{profile.fname}</p>
                          </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                          <Col xs={3} md={3}>
                            <p>นามสกุล: </p>
                          </Col>
                          <Col xs={9} md={9}>
                            <p>{profile.lname}</p>
                          </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                          <Col xs={3} md={3}>
                            <p>เบอร์: </p>
                          </Col>
                          <Col xs={9} md={9}>
                            <p>{profile.phone}</p>
                          </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                          <Col xs={3} md={3}>
                            <p>ที่อยู่: </p>
                          </Col>
                          <Col xs={9} md={9}>
                            <p>{profile.address}</p>
                          </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                          <Col xs={3} md={3}>
                            <p>กำหนดซื้อ: </p>
                          </Col>
                          <Col xs={9} md={9}>
                            <p>
                              {profile.dateLineBuy}
                              &nbsp;<Link to={"/"+user.username+'/product/'}><button className="w3-btn w3-ripple w3-blue">ซื้อ</button></Link>
                            </p>
                          </Col>
                        </Row>
                        <hr></hr>
                        <Row>
                          <Col xs={3} md={3}>
                            <p>URL: </p>
                          </Col>
                          <Col xs={9} md={9}>
                            <p>www.ezycashbag.com/sponser/{params.username}</p>
                          </Col>
                        </Row>

                      </div>


                      <hr></hr>
                      <Link to={'/sponser/'+user.username} target="_blank"><button className="w3-btn w3-ripple w3-green">SPONSER</button></Link>

                      <a href="#" target="_blank" className="icon-button twitter"><i className="fa fa-twitter"></i><span></span></a>
                      <a href="#" target="_blank" className="icon-button facebook"><i className="fa fa-facebook"></i><span></span></a>
                      <a href="#" target="_blank" className="icon-button google-plus"><i className="fa fa-google-plus"></i><span></span></a>
                      <a href="#" target="_blank" className="icon-button youtube"><i className="fa fa-youtube"></i><span></span></a>
                      <a href="#" target="_blank" className="icon-button pinterest"><i className="fa fa-pinterest"></i><span></span></a>
                    </Col>
                  </Row>
                </div>
              </div>:<Redirect to={"/"+user.sponsor+"/"}/>}
      </div>

    )
  }
}
const mapStateToProps = (state)=>{
  return {
    auth: state.auth,
    profile: state.profile
  }
}

const mapDispatchToProps = (dispatch)=>({
  setProfile:(profile)=> dispatch(setProfile(profile))
})

export default connect(mapStateToProps,mapDispatchToProps)(InfoUsPage);
