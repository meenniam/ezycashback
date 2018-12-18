import React,{Component} from 'react'
import './Professor.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {setProfile} from '../../Dux/profile'

class Professor extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoading:true
    }
  }

  componentDidMount(){
    const {setProfile} = this.props
    axios.get('https://us-central1-ezycashbag.cloudfunctions.net/widgets/Profile')
    .then(response=>{
      this.setState({isLoading:false})
      setProfile(response.data)
    })
  }
  render(){
    const {profile} = this.props.profile
    return(
      <div className="professContainer">
        <div>
          <h1 className="elearn">PROFESSOR</h1>
          <hr className="elearn"></hr>
          <p className="elearn">All modern browsers support the following 140 color names (click on a color name, or a hex value, to view the color as the background-color along with different text colors):</p>
          <div className="cardProfess">
            {(profile.imageProfile === undefined)?
              <img width="200px" src="http://kempenfeltplayers.com/wp-content/uploads/2015/07/profile-icon-empty.png" alt="Avatar"/>
              :<img width="200px" src={profile.imageProfile} alt="Avatar"/>}

            <div className="cardContainer">
              <h4><b>{profile.username}</b></h4>
              <p>Interior Designer</p>
              <hr className="elearn"></hr>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = (dispatch)=>({
  setProfile:(profile)=> dispatch(setProfile(profile))
})

export default connect(mapStateToProps,mapDispatchToProps)(Professor);
