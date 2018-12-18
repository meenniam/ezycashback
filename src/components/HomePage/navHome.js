import React,{Component} from 'react'
import './navHome.css'
import {NavDropdown,MenuItem,Glyphicon} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import setAuthorizationToken from '../setAuthorizationToken'
import axios from 'axios'

class navHome extends Component {
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
      $('#homenav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      document.querySelector('#homenav-toggle').addEventListener('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
    window.addEventListener('scroll', this.myFunction);

  }
  myFunction() {

    var myNavbar = document.getElementById('myNavbar')
    var myNodelist = document.querySelectorAll("ul.homenav-list li a");
    var myBrand = document.querySelectorAll("div.homebrand");
    var myDropdown = document.querySelectorAll("div.homedropdown");
    var myDropbtn = document.querySelectorAll("button.homedropbtn");
    var myUl = document.querySelectorAll("nav ul");
    var drop = document.getElementById('drop')
    var x = window.matchMedia("(max-width: 700px)")


    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      //myNavbar.className = 'colorNavWhite'+' homenavigation'
      myDropbtn[0].style.color = '#000'
      myBrand[0].style.color = '#000'
      myNavbar.style.background = '#fff'
      drop.style.color = '#000'
      myNavbar.classList.add("w3-card","w3-animate-top")
      for(var i=0;i<myNodelist.length;i++){
        myNodelist[i].style.color = '#000'
      }
      for(var i=0;i<myDropdown.length;i++){
        myDropdown[i].style.color = '#000'
      }

    }
    else {
      //myNavbar.className = myNavbar.className.replace('colorNavWhite','colorNavTrans')
      if(x.matches){
        for(var i=0;i<myNodelist.length;i++){
          myNodelist[i].style.color = '#000'
        }
        myDropbtn[0].style.color = '#000'
        drop.style.color = '#000'
      }
      else {
        for(var i=0;i<myNodelist.length;i++){
          myNodelist[i].style.color = '#fff'
        }
        myDropbtn[0].style.color = '#fff'
        drop.style.color = '#fff'
      }
      for(var i=0;i<myDropdown.length;i++){
        myDropdown[i].style.color = '#fff'
      }
      myBrand[0].style.color = '#fff'
      myNavbar.style.background = 'transparent'
      myNavbar.className = myNavbar.className.replace('w3-card','')
      myNavbar.className = myNavbar.className.replace('w3-animate-top','')
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.myFunction);
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

        <section className="homenavigation" id='myNavbar'>
          <div className="homenav-container">
            <div className="homebrand" id='myBrand'>
              <Link to={"/"+user.sponsor+"/"}>EzyCashBack</Link>
            </div>
            <nav className="myHomeNav">
              <div className="homenav-mobile"><a id="homenav-toggle" href="#!"><span></span></a></div>
                <ul className="homenav-list">
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
                  <div className="homedropdown">
                    <button style={{'backgroundColor':'transparent'}} className="homedropbtn">ห้องทำงาน{(memberActive.length === 0)?'':<div className="badge w3-animate-zoom"><span>{memberActive.length}</span></div>} <Glyphicon glyph="chevron-down"/></button>
                    <div className="homedropdown-content">
                      <Link to={"/"+user.sponsor+"/listmember"}>รายชื่อสมาชิก</Link>{(memberActive.length === 0)?'':<div className="dot w3-animate-zoom"><span>{memberActive.length}</span></div>}
                      <Link to={"/"+user.sponsor+"/info"}>ข้อมูลส่วนตัว</Link>
                    </div>
                  </div>
                  <div className="homedropdown">
                    <button id="drop" style={{'backgroundColor':'transparent'}} className="homedropbtn">สมาชิก <Glyphicon glyph="chevron-down"/></button>
                    <div className="homedropdown-content">
                      <Link to={"/"+user.sponsor+"/alllistmember"}>รายชื่อ</Link>
                    </div>
                  </div>
                  <div className="homedropdown" style={{'marginLeft':'15px','height':'50px'}}>
                    <a className="homedropa" href="" onClick={this.handleLogout.bind(this)}><Glyphicon glyph="log-in"/>  MEMBER LOGIN</a>
                  </div>
                </ul>

              </nav>
            </div>
          </section>

      </div>

    )
  }
}

export default navHome;
