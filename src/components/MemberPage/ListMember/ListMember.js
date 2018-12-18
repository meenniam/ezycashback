import React,{Component} from 'react'
import NavigationBar from '../../navigationBar'
import './ListMember.css'
import axios from 'axios'
import ListItem from './ListItemContainer'
import {Redirect} from 'react-router-dom'

class ListMember extends Component{
  constructor(props){
    super(props)

  }

  componentDidMount(){
    const {scrollTo} = window
    scrollTo(0, 0);
  }

  render(){
    const {memberActive,isLoading} = this.props.member
    const {user,isAuthenticate} = this.props.auth
    const {params} = this.props.match
    const lists = memberActive.map((data,key)=>(
      <ListItem  list={data} key={data.username}></ListItem>
    ))
    return (
      <div>
        {!isAuthenticate?
          <Redirect to="/"/>:
            (params.username === user.username)?
            <div className="listContainer">
              <NavigationBar/>
              <div className="divTop">
                <h1>จัดการสมาชิก</h1>
                <hr className="elearn"></hr>
              </div>
              <div className="divList">
              {isLoading?
                <div className="spon-flex"><div className="lds-ring "><div></div><div></div><div></div><div></div></div></div>
                :
                <div>
                  {(memberActive.length=== 0)?
                    <div style={{'color':'white','fontSize':'30px'}}>Empty</div>:
                      <table className="w3-table w3-bordered w3-white w3-hoverable">
                        <thead style={{'backgroundColor':'#f5f5f5'}} id="tHeader">
                          <tr>
                            <th>username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>สถานะ</th>
                          </tr>
                        </thead>
                        <tbody className="w3-card">
                          {lists}
                        </tbody>

                      </table>}
                      <br></br>
                      <div><p style={{'color':'red','fontSize':'20px'}}>*รายชื่อที่แสดงเป็นรายชื่อสมาชิกที่ยังไม่ได้ active</p></div>

                </div>

                }

              </div>

            </div>
            :
            <Redirect to={"/"+user.sponsor+"/"}/>}
      </div>
    )
  }
}


export default ListMember
