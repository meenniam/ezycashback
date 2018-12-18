import {Switch,Route} from 'react-router-dom';
import HomePage from './HomePage/HomePage'
import AboutUsPage from './AboutUsPage/AboutUsPage'
import ProductPage from './ProductPage/ProductPage'
import ELearningPage from './ELearningPage/ELearningPage'
import LoginPage from './LoginPage/LoginContainer'
import RegisterPage from './RegisterPage/RegisterPage'
import SponserPage from './SponserPage/SponserPage'
import ListMember from './MemberPage/ListMember/ListMemberContainer'
import AllListMember from './MemberPage/AllListMember/AllListMember'
import InfoPage from './InfoPage/InfoPage'


import React from 'react'

const main = ()=>(
  <div>
    <Switch>
      <Route exact path="/:username" component={HomePage}/>
      <Route exact path="/:username/home" component={HomePage}/>
      <Route exact path="/:username/aboutus" component={AboutUsPage}/>
      <Route exact path="/:username/elearn" component={ELearningPage}/>
      <Route exact path="/:username/product" component={ProductPage}/>
      <Route exact path="/" component={LoginPage}/>
      <Route exact path="/:username/register" component={RegisterPage}/>
      <Route exact path="/:username/listmember" component={ListMember}/>
      <Route exact path="/:username/alllistmember" component={AllListMember}/>
      <Route exact path="/:username/info" component={InfoPage}/>

      <Route exact path="/sponser/:username" component={SponserPage}/>
    </Switch>
  </div>
)


export default main
