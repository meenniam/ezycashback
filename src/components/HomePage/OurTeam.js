import React,{Component} from 'react'
import './OurTeam.css'
import {Row,Col} from 'react-bootstrap'
import $ from 'jquery'
import {Link} from 'react-router-dom'
import {Glyphicon} from 'react-bootstrap'
import {connect} from 'react-redux'
import axios from 'axios'

class OurTeam extends Component {
  constructor(props){
    super(props)
    this.state = {
      ourTeam:[],
      isLoading:true
    }
  }
  componentDidMount(){
    axios.get('https://us-central1-ezycashbag.cloudfunctions.net/widgets/RegisterName/Downline')
    .then(response=>{
      //console.log(response.data);
      this.setState({
        ourTeam:response.data,
        isLoading:false
      })
    })
  }
  componentDidUpdate(prevProps, prevState){
    $(document).ready(function() {
      //โค๊ดส่วนนี้หามาจากเว็ปไซต์ครับ
  //window and animation items
      var animation_elements = $.find('.animation-elementOur');
      var web_window = $(window);

  //check to see if any animation containers are currently in view
      function check_if_in_view() {
  //get current window information
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

  //iterate through elements to see if its in view
        $.each(animation_elements, function() {

    //get the element sinformation
          var element = $(this);
          var element_height = $(element).outerHeight();
          var element_top_position = $(element).offset().top;
          var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)

          if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
            element.addClass('in-view');
          } else {
            element.removeClass('in-view');
          }
        });

      }

    //on or scroll, detect elements in view
      $(window).on('scroll resize', function() {
        check_if_in_view()
      })
    //trigger our scroll event on initial load
      $(window).trigger('scroll');

    });
  }
  render(){

    const {user} = this.props.auth
    const {ourTeam,isLoading} = this.state
    return(
      <div className="ourContainer">
        <div>
          <h1 className="elearn">OUR TEAM</h1>
          <hr className="elearn"></hr>
          <p className="elearn">All modern browsers support the following 140 color names (click on a color name, or a hex value, to view the color as the background-color along with different text colors):</p>
        </div>
        {isLoading?
          <div className="spon-flex"><div className="lds-ring "><div></div><div></div><div></div><div></div></div></div>
          :
          <Row className="show-grid rowOur">
            {(((ourTeam.length%4)===1)||((ourTeam.length%4)===2)||((ourTeam.length%4)===3))?
              <Col className="animation-elementOur slide-left" sm={6} md={3} style={{'padding':'30px'}}>
                <div className="our">
                  <div className="header">
                    <img height="100%" width="100%" src="https://i0.wp.com/idagroveia.com/wp-content/uploads/2016/07/Ida-People-Leaders-Peter-Goldsmith-1.jpg?fit=400%2C500"></img>
                  </div>
                  <div className="ourContent">
                    <h3>{((ourTeam.length%4)===1)?ourTeam[ourTeam.length-1].username:((ourTeam.length%4)===2)?ourTeam[ourTeam.length-2].username:((ourTeam.length%4)===3)?ourTeam[ourTeam.length-3].username:''}</h3>
                    <hr className="elearn"></hr>
                    <p>All modern browsers support the following 140 color names (click on a color name to view the color as the background-color along with different text colors)</p>

                  </div>

                </div>
              </Col>:
              <Col className="animation-elementOur slide-left" sm={6} md={3} style={{'padding':'30px'}}>
                <div className="our">
                  <Link to={'/'+user.sponsor+'/register'}>
                    <div title="ลงทะเบียน" className="header">
                      <div className="centerPlus">
                        <Glyphicon className="glyPlus" glyph="plus"></Glyphicon>
                      </div>
                    </div>
                  </Link>
                </div>
              </Col>}
              {((ourTeam.length%4)===2||((ourTeam.length%4)===3))?
                <Col className="animation-elementOur slide-left" sm={6} md={3} style={{'padding':'30px'}}>
                  <div className="our">
                    <div className="header">
                      <img height="100%" width="100%" src="https://i0.wp.com/idagroveia.com/wp-content/uploads/2016/07/Ida-People-Leaders-Peter-Goldsmith-1.jpg?fit=400%2C500"></img>
                    </div>
                    <div className="ourContent">
                      <h3>{((ourTeam.length%4)===2)?ourTeam[ourTeam.length-1].username:((ourTeam.length%4)===3)?ourTeam[ourTeam.length-2].username:''}</h3>
                      <hr className="elearn"></hr>
                      <p>All modern browsers support the following 140 color names (click on a color name to view the color as the background-color along with different text colors)</p>

                    </div>

                  </div>
                </Col>:
                <Col className="animation-elementOur slide-left" sm={6} md={3} style={{'padding':'30px'}}>
                  <div className="our">
                    <Link to={'/'+user.sponsor+'/register'}>
                      <div title="ลงทะเบียน" className="header">
                        <div className="centerPlus">
                          <Glyphicon className="glyPlus" glyph="plus"></Glyphicon>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Col>}
                {((ourTeam.length%4)===3)?
                  <Col className="animation-elementOur slide-left" sm={6} md={3} style={{'padding':'30px'}}>
                    <div className="our">
                      <div className="header">
                        <img height="100%" width="100%" src="https://i0.wp.com/idagroveia.com/wp-content/uploads/2016/07/Ida-People-Leaders-Peter-Goldsmith-1.jpg?fit=400%2C500"></img>
                      </div>
                      <div className="ourContent">
                        <h3>{ourTeam[ourTeam.length-1].username}</h3>
                        <hr className="elearn"></hr>
                        <p>All modern browsers support the following 140 color names (click on a color name to view the color as the background-color along with different text colors)</p>

                      </div>

                    </div>
                  </Col>:
                  <Col className="animation-elementOur slide-left" sm={6} md={3} style={{'padding':'30px'}}>
                    <div className="our">
                      <Link to={'/'+user.sponsor+'/register'}>
                        <div title="ลงทะเบียน" className="header">
                          <div className="centerPlus">
                            <Glyphicon className="glyPlus" glyph="plus"></Glyphicon>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </Col>}
                    <Col className="animation-elementOur slide-left" sm={6} md={3} style={{'padding':'30px'}}>
                      <div className="our">
                        <Link to={'/'+user.sponsor+'/register'}>
                          <div title="ลงทะเบียน" className="header">
                            <div className="centerPlus">
                              <Glyphicon className="glyPlus" glyph="plus"></Glyphicon>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </Col>
          </Row>}



      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    auth:state.auth
  }
}

export default connect(mapStateToProps)(OurTeam)
