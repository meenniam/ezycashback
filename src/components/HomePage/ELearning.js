import React,{Component} from 'react'
import './ELearning.css'
import {Row,Col,code} from 'react-bootstrap'
import 'w3-css/w3.css';
import $ from 'jquery'

class ELearning extends Component {
  componentDidMount(){
    $(document).ready(function() {

//window and animation items
      var animation_elements = $.find('.animation-element');
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
          if ((element_bottom_position >= window_top_position) && (element_top_position <= (window_bottom_position))) {
            element.addClass('in-views w3-animate-zoom');
          } else {
            element.removeClass('in-views w3-animate-zoom');
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
    return(
      <div className="elearnContainer">
        <div>
          <h1 className="elearn"> E-LEARNING</h1>
          <hr className="elearn"></hr>
          <p className="elearn">All modern browsers support the following 140 color names (click on a color name, or a hex value, to view the color as the background-color along with different text colors):</p>
        </div>
        <Row className="show-grid rowElearn" >
          <Col sm={6} md={4} style={{'padding':'30px'}}>
            <div className="animation-element slide-left">
              <img className="imgElearn"  width="200px" height="150px" src="https://marketinginsidergroup.com/wp-content/uploads/2015/08/online-marketing-300x200-300x200.jpg"></img>
              <hr className="elearn"></hr>
              <p className="elearn">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
          </Col>
          <Col sm={6} md={4} style={{'padding':'30px'}}>
            <div  className="animation-element slide-left">
              <img className="imgElearn" width="200px" height="150px" src="https://marketinginsidergroup.com/wp-content/uploads/2015/08/online-marketing-300x200-300x200.jpg"></img>
              <hr className="elearn"></hr>
              <p className="elearn">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>          </Col>
          <Col sm={6} md={4} style={{'padding':'30px'}}>
            <div className="animation-element slide-left">
              <img className="imgElearn" width="200px" height="150px" src="https://marketinginsidergroup.com/wp-content/uploads/2015/08/online-marketing-300x200-300x200.jpg"></img>
              <hr className="elearn"></hr>
              <p className="elearn">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>          </Col>
          <Col sm={6} md={4} style={{'padding':'30px'}}>
            <div className="animation-element slide-left">
              <img className="imgElearn" width="200px" height="150px" src="https://marketinginsidergroup.com/wp-content/uploads/2015/08/online-marketing-300x200-300x200.jpg"></img>
              <hr className="elearn"></hr>
              <p className="elearn">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>          </Col>
          <Col sm={6} md={4} style={{'padding':'30px'}}>
            <div className="animation-element slide-left" >
              <img className="imgElearn" width="200px" height="150px" src="https://marketinginsidergroup.com/wp-content/uploads/2015/08/online-marketing-300x200-300x200.jpg"></img>
              <hr className="elearn"></hr>
              <p className="elearn">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>          </Col>
          <Col sm={6} md={4} style={{'padding':'30px'}}>
            <div className="animation-element slide-left">
              <img className="imgElearn" width="200px" height="150px" src="https://marketinginsidergroup.com/wp-content/uploads/2015/08/online-marketing-300x200-300x200.jpg"></img>
              <hr className="elearn"></hr>
              <p className="elearn">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>          </Col>
        </Row>
      </div>
    )
  }
}

export default ELearning
