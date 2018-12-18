import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import NavigationBar from '../../navigationBar'
import AllListItem from './AllListItem'
class AllListMember extends Component{
  constructor(props){
    super(props)
    this.state= {
      isLoading: true,
      lists: []
    }

  }

  componentDidMount(){
    const {scrollTo} = window
    scrollTo(0, 0);
    axios.get('https://us-central1-ezycashbag.cloudfunctions.net/widgets/RegisterName/AllDownline')
    .then((response)=>{
      //console.log(response.data);

      this.setState({
        isLoading:false,
        lists: response.data
      })

    })
  }
  render(){
    const {user,isAuthenticate} = this.props.auth
    const {params} = this.props.match
    const {isLoading,lists} = this.state
    console.log(lists);
    const list = lists.map((data,key)=> (
      <AllListItem id={key+1} list={data} key={data.username}/>
    ))
    return(
      <div>
        {!isAuthenticate?
          <Redirect to="/"/>:

            <div className="listContainer">
              <NavigationBar/>
              <div className="divTop">
                <h1>รายชื่อสมาชิก</h1>
                <hr className="elearn"></hr>
              </div>
              <div className="divList">
              {isLoading?
                <div className="spon-flex"><div className="lds-ring "><div></div><div></div><div></div><div></div></div></div>
                :
                <div>
                  {lists.length === 0?
                  <h1>ไม่มีสมาชิก</h1>:
                    <table className="w3-table w3-bordered w3-white w3-hoverable">
                      <thead style={{'backgroundColor':'#f5f5f5'}} id="tHeader">
                        <tr>
                          <th>ผู้สนใจ-ลงทะเบียน</th>
                          <td></td>
                          <th>สมัครสมาชิก active</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <th>ลำดับ</th>
                          <th>วัน เดือน ปี</th>
                          <th>วัน เดือน ปี</th>
                          <th>User/ผู้สมัคร</th>
                          <th>User ผู้แนะนำ</th>
                          <th>สมัครร่วมธุรกิจ</th>
                          <th>กำหนด 30 วัน</th>
                          <th>สั่งซื้อสินค้า</th>
                        </tr>
                      </thead>
                      <tbody className="w3-card">
                        {list}
                      </tbody>

                    </table>}

                </div>

                }

              </div>

            </div>
              }
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(AllListMember)
