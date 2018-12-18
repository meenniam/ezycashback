import React,{Component} from 'react'
import './CounterUp.css'
import $ from 'jquery'
import {Row,Col,Glyphicon} from 'react-bootstrap'
import axios from 'axios'

class CounterUp extends Component {

  constructor(props){
    super(props)

  }

  componentDidUpdate(prevProps, prevState){
    $('.counter').each(function() {
      var $this = $(this),
      countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      {
        duration: 8000,
        easing:'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }
      });
    });
  }
  render(){
    const {counting,isLoading} = this.props
    return(
      <div className="parallax">

        <Row className="show-grid rowCounter">
          <Col className="colCounter" xs={6} md={3} style={{'padding':'30px'}}>
            <div style={{'fontSize':'40px'}}>
              <Glyphicon glyph="globe" style={{'color':'#fff'}}/>
            </div>
            <div className="counter" data-count={counting.Interested}>0</div>
            <hr className="count"></hr>
          <div style={{'color':'#fff'}}><h3>ผู้สนใจทดลองใช้ระบบ</h3></div>
          </Col>
          <Col className="colCounter" xs={6} md={3} style={{'padding':'30px'}}>
            <div style={{'fontSize':'40px'}}>
              <Glyphicon glyph="book" style={{'color':'#fff'}}/>
            </div>
            <div className="counter" data-count={counting.Registered}>0</div>
            <hr className="count"></hr>
          <div style={{'color':'#fff'}}><h3>ลงทะเบียนร่วมธุรกิจ</h3></div>
          </Col>
          <Col className="colCounter" xs={6} md={3} style={{'padding':'30px'}}>
            <div style={{'fontSize':'40px'}}>
              <Glyphicon glyph="gift" style={{'color':'#fff'}}/>
            </div>
            <div className="counter" data-count={counting.Waiting}>0</div>
            <hr className="count"></hr>
          <div style={{'color':'#fff'}}><h3>รอการยืนยัน</h3></div>
          </Col>
          <Col className="colCounter" xs={6} md={3} style={{'padding':'30px'}}>
            <div style={{'fontSize':'40px'}}>
              <Glyphicon glyph="briefcase" style={{'color':'#fff'}}/>
            </div>
            <div className="counter" data-count={counting.Package}>0</div>
            <hr className="count"></hr>
          <div style={{'color':'#fff'}}><h3>เหลือเวลาซื้อสินค้า </h3></div>
          </Col>


        </Row>


      </div>
    )
  }
}

export default CounterUp;
