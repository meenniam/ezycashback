import React,{Component} from 'react'
import './AboutUsPage.css'
import NavigationBar from '../navigationBar'
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class AboutUsPage extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const {scrollTo} = window
    scrollTo(0, 0);

  }
  render(){
    const {user,isAuthenticate} = this.props.auth
    const {params} = this.props.match
    return(
      <div>
        {!isAuthenticate?
          <Redirect to="/"/>:
            (params.username === user.sponsor)?
              <div >
                <NavigationBar/>
                <div className="aboutParallax">
                  <div className="aboutCaption aboutCenter">
                    <h1>ABOUT US</h1>
                    <hr className="elearn"></hr>
                  </div>
                </div>
                <div className="aboutContainer" style={{'height':'500px'}}>
                  <h1>ABOUT US</h1>
                  <hr className="elearn"></hr>
                </div>
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




export default connect(mapStateToProps)(AboutUsPage);
