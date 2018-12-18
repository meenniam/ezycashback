import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/navigationBar'
import HomePage from './components/HomePage/HomePage'
import Main from './components/main'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faPlusCircle , faMinusCircle,faShoppingCart,faTwitter} from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import AppCart from './AppCart'


library.add(faPlusCircle, faMinusCircle,faShoppingCart)

class App extends Component {
  componentDidUpdate(prevProps, prevState){
      $('#cartDropID').click(function() {
        $('.cartDrop-content').slideDown();
        $('.badgeCart').hide();
      });

      $('#cartHead').click(function() {
        $('.cartDrop-content').slideUp();
        $('.badgeCart').show();
      });

  }


  render() {
    const {items,amount,removeFromCart,total} = this.props
    return (
      <div className="backgroundApp">

        <div className="homeContainer">
          <Main/>
        </div>

        {items.length === 0?'':
          <div>
            <div className="cartDrop-content">
              <div className="cartHead" id="cartHead">
                <a><i className="fa fa-times fa-2x"></i></a>
              </div>
              <br></br>
              {items.length > 0 && (
                  <div className="cartBody">
                    {items.map((item,index) => (
                        <AppCart key={item.id} amounts={amount[index]} {...item} onClick={() => removeFromCart(item.id)} />
                      ))}
                  </div>
              )}
              <div className="cartFoot" id="cartFoot">
                <button className="w3-btn w3-ripple w3-blue w3-animate-right" style={{'width':'100%'}}>total: {total} </button>
              </div>
            </div>
            <div className="cartDrop w3-animate-zoom" id="cartDropID">
              <a><i className="fa fa-shopping-cart fa-3x"></i></a><div className="badgeCart w3-animate-zoom"><span>{items.length}</span></div>
            </div>
          </div>}
        <footer className="footer">
          <h3>Ezy Cash Bags</h3>
          <a href="#" target="_blank" className="icon-button twitter"><i className="fa fa-twitter"></i><span></span></a>
          <a href="#" target="_blank" className="icon-button facebook"><i className="fa fa-facebook"></i><span></span></a>
          <a href="#" target="_blank" className="icon-button google-plus"><i className="fa fa-google-plus"></i><span></span></a>
          <a href="#" target="_blank" className="icon-button youtube"><i className="fa fa-youtube"></i><span></span></a>
          <a href="#" target="_blank" className="icon-button pinterest"><i className="fa fa-pinterest"></i><span></span></a>
        </footer>
      </div>
    );
  }
}


export default App;
