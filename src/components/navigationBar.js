import React,{Component} from 'react'
import './navigationBar.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {NavDropdown,MenuItem,Glyphicon} from 'react-bootstrap'

import $ from 'jquery'
import setAuthorizationToken from './setAuthorizationToken'
import axios from 'axios'
import {setMemberAcive} from '../Dux/member'
import {setCurrentUser} from '../Dux/authen'
import {resetToCart} from '../Dux/cart'

class NavigationBar extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const {setMemberAcive} = this.props
    axios.get('https://us-central1-ezycashbag.cloudfunctions.net/widgets/RegisterName')
    .then(response=>{
      setMemberAcive(response.data)
    })
    $(function() { // DOM ready
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      document.querySelector('#nav-toggle').addEventListener('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  }

  handleLogout(e){
    const {setCurrentUser,resetToCart} = this.props;
    const {location} = window
    e.preventDefault();
    localStorage.removeItem('jwtToken')
    setAuthorizationToken(false)
    setCurrentUser({})
    resetToCart();
    location.href = "/"
    //history.push('/login')
  }

  render(){
    const {user} = this.props.auth
    const {memberActive} = this.props.member
    return(
      <div>

        <section className="navigation" id='myNavbar'>
          <div className="nav-container">
            <div className="brand" id='myBrand'>
              <Link to={"/"+user.sponsor+"/"}>EzyCashBack</Link>
            </div>
            <nav className="myNav">
              <div className="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
                <ul className="nav-list">
                  <li>
                    <Link to={"/"+user.sponsor+"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/"+user.sponsor+"/aboutus"}>เกี่ยวกับเรา</Link>
                  </li>
                  <li>
                    <Link to={"/"+user.sponsor+"/product"}>ผลิตภัณฑ์</Link>
                  </li>
                  <li>
                    <Link to={"/"+user.sponsor+"/elearn"}>E-Learning</Link>
                  </li>
                  <li>
                    <Link to={"/"+user.sponsor+"/register"}>ลงทะเบียนร่วมธุรกิจ</Link>
                  </li>
                  <li>
                    <Link to={"/"+user.sponsor+"/"}>ติดต่อเรา</Link>
                  </li>
                  <div className="dropdown">
                    <button style={{'backgroundColor':'transparent'}} className="dropbtn">ห้องทำงาน{(memberActive.length === 0)?'':<div className="badge w3-animate-zoom"><span>{memberActive.length}</span></div>} <Glyphicon glyph="chevron-down"/></button>
                    <div className="dropdown-content">
                      <Link to={"/"+user.sponsor+"/listmember"}>รายชื่อสมาชิก</Link>{(memberActive.length === 0)?'':<div className="dot w3-animate-zoom"><span>{memberActive.length}</span></div>}
                      <Link to={"/"+user.sponsor+"/info"}>ข้อมูลส่วนตัว</Link>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button id="drop" style={{'backgroundColor':'transparent'}} className="dropbtn">สมาชิก <Glyphicon glyph="chevron-down"/></button>
                    <div className="dropdown-content">
                      <Link to={"/"+user.sponsor+"/alllistmember"}>รายชื่อ</Link>

                    </div>
                  </div>
                  <div className="dropdown" style={{'marginLeft':'15px','height':'50px'}}>
                    <a href="" onClick={this.handleLogout.bind(this)}><Glyphicon glyph="log-in"/>  MEMBER LOGIN</a>
                  </div>
                </ul>

              </nav>
            </div>
          </section>

      </div>

    )
  }
}

const mapStateToProps = (state)=>{
  return {
    auth: state.auth,
    member: state.memberList
  }
}

const mapDispatchToProps = (dispatch)=>({
  setMemberAcive: (member)=> dispatch(setMemberAcive(member)),
  setCurrentUser:(user)=> dispatch(setCurrentUser(user)),
  resetToCart:()=> dispatch(resetToCart())
})

export default connect(mapStateToProps,mapDispatchToProps)(NavigationBar);
