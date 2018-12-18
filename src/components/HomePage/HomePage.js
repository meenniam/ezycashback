import React,{Component} from 'react';
import CaroulselHome from './caroulselHome'
import ELearning from './ELearning'
import CounterUp from './CounterUp'
import PricingTable from './PricingTable'
import OurTeam from './OurTeam'
import Professor from './Professor'
import './HomePage.css'
import NavHome from './navHomeContainer'
import Success from './Success'
import axios from 'axios'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class HomePage extends Component{
  constructor(props){
    super(props)
    this.state = {
      counting: {},
      isLoading: false
    }
  }

  componentDidMount(){
    const {setPage} = this.props
    const {scrollTo} = window
    scrollTo(0, 0);
    axios.get('https://us-central1-ezycashbag.cloudfunctions.net/widgets/Counting')
    .then((response)=>{
      this.setState({counting: response.data,isLoading:true})
    })
  }
  render(){
    const {counting} = this.state
    const {user,isAuthenticate} = this.props.auth
    const {params} = this.props.match
    //console.log(params.username);
    return(
      <div>
        {!isAuthenticate?
          <Redirect to="/"/>:
            (params.username === user.sponsor)?
              <div>
                <NavHome/>
                <CaroulselHome/>
                <ELearning/>
                <CounterUp counting={counting}/>
                <Professor/>
                <OurTeam/>
                <Success/>
                <PricingTable/>
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


export default connect(mapStateToProps)(HomePage);
