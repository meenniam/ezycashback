import React,{Component} from 'react'
import axios from 'axios'
import {Modal,Button,Row,Col} from 'react-bootstrap'
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ListItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      active: false,
      show:false,
      value:'',
      copied:false,
      showActive:false
    }
  }

  handleClick(){
    this.setState({showActive:!this.state.showActive})
  }
  handleDetail(){
    this.setState({show:true})
  }
  handleClose(){
    this.setState({
      show:!this.state.show
    })
  }
  handleCansel(){
    this.setState({
      showActive:!this.state.showActive
    })
  }
  handleActive(){
    this.setState({showActive:!this.state.showActive})
    const {list,removeMemberAcive} = this.props
    axios.post('https://us-central1-ezycashbag.cloudfunctions.net/widgets/RegisterName/Active',{
      username: list.username
    })
    .then(response =>{
      //console.log(response);
      removeMemberAcive(list.username)
    })
  }



  handleCopy(){
    this.setState({copied: true})
    setTimeout(()=>{
      this.setState({copied: false})
    },1000)
  }

  render(){
    const {list} = this.props
    const {active,show,copied,showActive} = this.state
    return (
      <tr>
        <Modal show={showActive} onHide={this.handleCansel.bind(this)}>
          <Modal.Body >
            <h3>ยืนยันข้อมูล</h3><br></br>
            <div>
              ท่านยืนยันการ active หรือไม่
            </div>
            <br></br>
            <div style={{'textAlign':'right'}}>
              <button className="w3-btn w3-ripple w3-blue" onClick={this.handleActive.bind(this)}>ตกลง</button>
              &nbsp;<button className="w3-btn w3-ripple w3-red" onClick={this.handleCansel.bind(this)}>ยกเลิก</button>
            </div>

          </Modal.Body>
        </Modal>
        <Modal show={show} onHide={this.handleClose.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>รายละเอียดสมาชิก</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {copied?
              <div className="divCopied">
                <h1>Copied!!!</h1>
              </div>:""}
            <div style={{'paddingLeft':'10%','paddingRight':'10%'}}>
              <Row className="divRow">
                <Col md={8} xs={8}>
                  <div>username: {list.username}
                  </div>
                </Col>
                <Col md={4} xs={4}>
                  <CopyToClipboard text={list.username}
                    onCopy={this.handleCopy.bind(this)}>
                    <button className="w3-btn w3-ripple w3-blue">Copy</button>
                  </CopyToClipboard>
                </Col>
              </Row>
              <Row className="divRow">
                <Col md={8} xs={8}>
                  <div>ชื่อ: {list.fname}
                  </div>
                </Col>
                <Col md={4} xs={4}>
                  <CopyToClipboard text={list.fname}
                    onCopy={this.handleCopy.bind(this)}>
                    <button className="w3-btn w3-ripple w3-blue">Copy</button>
                  </CopyToClipboard>
                </Col>
              </Row>
              <Row className="divRow">
                <Col md={8} xs={8}>
                  <div>นามสกุล: {list.lname}
                  </div>
                </Col>
                <Col md={4} xs={4}>
                  <CopyToClipboard text={list.lname}
                    onCopy={this.handleCopy.bind(this)}>
                    <button className="w3-btn w3-ripple w3-blue">Copy</button>
                  </CopyToClipboard>
                </Col>
              </Row>
              <Row className="divRow">
                <Col md={8} xs={8}>
                  <div>เลขบัตรประชาชน: {list.identityNumber}
                  </div>
                </Col>
                <Col md={4} xs={4}>
                  <CopyToClipboard text={list.identityNumber}
                    onCopy={this.handleCopy.bind(this)}>
                    <button className="w3-btn w3-ripple w3-blue">Copy</button>
                  </CopyToClipboard>
                </Col>
              </Row>
              <Row className="divRow">
                <Col md={8} xs={8}>
                  <div>เพศ: {list.sex}
                  </div>
                </Col>
                <Col md={4} xs={4}>
                  <CopyToClipboard text={list.sex}
                    onCopy={this.handleCopy.bind(this)}>
                    <button className="w3-btn w3-ripple w3-blue">Copy</button>
                  </CopyToClipboard>
                </Col>
              </Row>
              <Row className="divRow">
                <Col md={8} xs={8}>
                  <div>วันเกิด: {list.birthday}
                  </div>
                </Col>
                <Col md={4} xs={4}>
                  <CopyToClipboard text={list.birthday}
                    onCopy={this.handleCopy.bind(this)}>
                    <button className="w3-btn w3-ripple w3-blue">Copy</button>
                  </CopyToClipboard>
                </Col>
              </Row>
              <Row className="divRow">
                <Col md={8} xs={8}>
                  <div>ธนาคาร: {list.bankName}
                  </div>
                </Col>
                <Col md={4} xs={4}>
                  <CopyToClipboard text={list.bankName}
                    onCopy={this.handleCopy.bind(this)}>
                    <button className="w3-btn w3-ripple w3-blue">Copy</button>
                  </CopyToClipboard>
                </Col>
              </Row>
              <Row className="divRow">
                <Col md={8} xs={8}>
                  <div>เลขบัญชี: {list.bankID}
                  </div>
                </Col>
                <Col md={4} xs={4}>
                  <CopyToClipboard text={list.bankID}
                    onCopy={this.handleCopy.bind(this)}>
                    <button className="w3-btn w3-ripple w3-blue">Copy</button>
                  </CopyToClipboard>
                </Col>
              </Row>
              <Row className="divRow">
                <Col md={8} xs={8}>
                  <div>ที่อยู่: {list.address}
                  </div>
                </Col>
                <Col md={4} xs={4}>
                  <CopyToClipboard text={list.address}
                    onCopy={this.handleCopy.bind(this)}>
                    <button className="w3-btn w3-ripple w3-blue">Copy</button>
                  </CopyToClipboard>
                </Col>
              </Row>
              <Row className="divRow">
                <Col md={8} xs={8}>
                  <div>ถนน: {list.street}
                  </div>
                </Col>
                <Col md={4} xs={4}>
                  <CopyToClipboard text={list.street}
                    onCopy={this.handleCopy.bind(this)}>
                    <button className="w3-btn w3-ripple w3-blue">Copy</button>
                  </CopyToClipboard>
                </Col>
              </Row>
              <Row className="divRow">
                <Col md={8} xs={8}>
                  <div>ตำบล: {list.tumbon}
                  </div>
                </Col>
                <Col md={4} xs={4}>
                  <CopyToClipboard text={list.tumbon}
                    onCopy={this.handleCopy.bind(this)}>
                    <button className="w3-btn w3-ripple w3-blue">Copy</button>
                  </CopyToClipboard>
                </Col>
              </Row>
              <Row className="divRow">
                <Col md={8} xs={8}>
                  <div>อำเภอ: {list.district}
                  </div>
                </Col>
                <Col md={4} xs={4}>
                  <CopyToClipboard text={list.district}
                    onCopy={this.handleCopy.bind(this)}>
                    <button className="w3-btn w3-ripple w3-blue">Copy</button>
                  </CopyToClipboard>
                </Col>
              </Row>
              <Row className="divRow">
                <Col md={8} xs={8}>
                  <div>จังหวัด: {list.province}
                  </div>
                </Col>
                <Col md={4} xs={4}>
                  <CopyToClipboard text={list.province}
                    onCopy={this.handleCopy.bind(this)}>
                    <button className="w3-btn w3-ripple w3-blue">Copy</button>
                  </CopyToClipboard>
                </Col>
              </Row>

              <Row>
                <Col md={8} xs={8}>
                  <div>รหัสไปรษณีย์: {list.postalCode}
                  </div>
                </Col>
                <Col md={4} xs={4}>
                  <CopyToClipboard text={list.postalCode}
                    onCopy={this.handleCopy.bind(this)}>
                    <button className="w3-btn w3-ripple w3-blue">Copy</button>
                  </CopyToClipboard>
                </Col>
              </Row>

            </div>
          </Modal.Body>
          <Modal.Footer>
            <p style={{'color':'red'}}>*เมื่อท่านลงทะเบียนให้เรียบร้อยแล้ว กรุณากลับมา active ให้สมาชิกด้วย</p><Button onClick={this.handleClose.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
        <td>{list.username}</td>
        <td>{list.fname}</td>
        <td>{list.lname}</td>
        <td style={{'width':'250px'}}>
          <button onClick={this.handleClick.bind(this)} style={{'marginBottom':'5px'}} className={"w3-btn w3-ripple "+(active?"w3-red":"w3-green")} disabled={active}>active</button>
          &nbsp;
          <button onClick={this.handleDetail.bind(this)} style={{'marginBottom':'5px'}} className="w3-btn w3-ripple w3-blue">รายละเอียด</button>
        </td>

      </tr>
    )
  }
}


export default ListItem
