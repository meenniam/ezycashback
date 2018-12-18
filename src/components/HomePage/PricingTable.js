import React,{Component} from 'react'
import './PricingTable.css'
import {Row,Col} from 'react-bootstrap'
import $ from 'jquery'

class PricingTable extends Component {
  componentDidMount(){
    $(document).ready(function() {

//window and animation items
      var animation_elements = $.find('.animation-elementPrice');
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
    return(
      <div className="priceContainer">
        <div>
          <h1 className="elearn">PRICING TABLE</h1>
          <hr className="elearn"></hr>
          <p className="elearn">All modern browsers support the following 140 color names (click on a color name, or a hex value, to view the color as the background-color along with different text colors):</p>
        </div>

        <Row className="show-grid rowPrice">
          <Col className="animation-elementPrice slide-left" sm={6} md={3} style={{'padding':'30px'}}>
            <ul className="price">
              <div className="header">Pro</div>
              <li className="grey">$ 24.99 / year</li>
              <li>25GB Storage</li>
              <li>25 Emails</li>
              <li>25 Domains</li>
              <li>2GB Bandwidth</li>
              <li className="grey"><a href="#" className="button">Sign Up</a></li>
            </ul>
          </Col>
          <Col className="animation-elementPrice slide-left" sm={6} md={3} style={{'padding':'30px'}}>
            <ul className="price">
              <div className="header">Basic</div>
              <li className="grey">$ 9.99 / year</li>
              <li>10GB Storage</li>
              <li>10 Emails</li>
              <li>10 Domains</li>
              <li>1GB Bandwidth</li>
              <li className="grey"><a href="#" className="button">Sign Up</a></li>
            </ul>
          </Col>
          <Col className="animation-elementPrice slide-left" sm={6} md={3} style={{'padding':'30px'}}>
            <ul className="price">
              <div className="header">Basic</div>
              <li className="grey">$ 9.99 / year</li>
              <li>10GB Storage</li>
              <li>10 Emails</li>
              <li>10 Domains</li>
              <li>1GB Bandwidth</li>
              <li className="grey"><a href="#" className="button">Sign Up</a></li>
            </ul>
          </Col>
          <Col className="animation-elementPrice slide-left" sm={6} md={3} style={{'padding':'30px'}}>
            <ul className="price">
              <div className="header">Premium</div>
              <li className="grey">$ 49.99 / year</li>
              <li>50GB Storage</li>
              <li>50 Emails</li>
              <li>50 Domains</li>
              <li>5GB Bandwidth</li>
              <li className="grey"><a href="#" className="button">Sign Up</a></li>
            </ul>
          </Col>
        </Row>



      </div>
    )
  }
}

export default PricingTable;
