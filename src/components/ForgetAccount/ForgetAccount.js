import React,{Component} from 'react'

import './ForgetAccount.css'
import {connect} from 'react-redux'
import {setPage} from '../../Dux/pages'
import {setDataForget} from '../../Dux/dataForget'
import axios from 'axios'
import validateInput from './validation'

class ForgetAccount extends Component{
  constructor(props){
    super(props)
    this.state={
      userID: '',
      isLoading: false,
      errors:{},
      message: ''
    }
  }
  handleUserID(e){
    this.setState({
      userID:e.target.value
    })
  }
  isValid(){
    const {errors,isValid} = validateInput(this.state)
    if(!isValid){
      this.setState({errors})
    }
    return isValid
  }
  handleNext(){
    const {setPage,setDataForget} = this.props
    const {userID,isLoading}= this.state
    if(this.isValid()){
      this.setState({
        errors: {},
        message: '',
        isLoading:true
      })
      axios.post('https://us-central1-ezycashbag.cloudfunctions.net/widgets/Password',{
        identity: userID
      })
      .then((response)=>{
        console.log(response.data);
        if(response.data.message === 'Have not user'){
          this.setState({
            message: 'ไม่มีผู้ใช้นี้อยู่',
            isLoading: false
          })
        }
        else {
          setPage('confirm',true)
          setDataForget(response.data)
        }
      })
    }

  }

  handlePrevious(){
    const {setPage} = this.props
    setPage('home',false)
  }
  render(){
    const {userID,isLoading,message,errors} = this.state
    const {click} = this.props.pages
    return(
      <div className={"cardLogin "+(click?'w3-animate-right':'w3-animate-left')}>
        {isLoading?
          <div className="divLoading">
            <div className="loadings centerLogin">
              <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
          </div>
          :<div></div>}
        <div className="cardContainer">
          <h4><b>กรุณากรอกเลขบัตรประชาชนของท่าน</b></h4>
          <hr className="elearn"></hr>
          <form>
            <div className="formsLogin">
              <div className="myDivInput">
                <input value={userID} onChange={this.handleUserID.bind(this)} className="myInput" type="number" required/>
                <label>รหัสบัตรประชาชน</label>
              </div>
              <p>{errors.userID}</p>
            </div>
          </form>
          <p style={{'color':'red'}}>{message}</p>
          <button onClick={this.handlePrevious.bind(this)} className="w3-button w3-white w3-border w3-round-large">ย้อนกลับ</button>
          &nbsp;<button onClick={this.handleNext.bind(this)} className="w3-button w3-white w3-border w3-round-large">ถัดไป</button>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state)=>{
  return {
    pages: state.pages
  }
}

const mapDispatchToProps=(dispatch)=>({
  setPage: (page,click)=> dispatch(setPage(page,click)),
  setDataForget: (data)=>dispatch(setDataForget(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(ForgetAccount)
