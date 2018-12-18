import React,{Component} from 'react'
import './ELearningPage.css'

import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import NavigationBar from '../navigationBar'

class ELearningPage extends Component {

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
                <div className="aboutParallax"></div>
                <div className="elearnContainer">
                  <h1>E-Learning</h1>
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

export default connect(mapStateToProps)(ELearningPage);
