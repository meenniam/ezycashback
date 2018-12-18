import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {combineReducers,createStore} from 'redux'
import cartReducer from './Dux/cart'
import productsReducer from './Dux/products'
import productDetailReducer from './Dux/productDetail'
import memberReducer from './Dux/member'
import authReducer from './Dux/authen'
import profileReducer from './Dux/profile'
import pagesReducer from './Dux/pages'
import dataForgetReducer from './Dux/dataForget'
import setAuthorizationToken from './components/setAuthorizationToken'
import jwt from 'jsonwebtoken'

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  productDetail: productDetailReducer,
  auth: authReducer,
  memberList:memberReducer,
  profile:profileReducer,
  pages:pagesReducer,
  dataForget:dataForgetReducer
})

let store = createStore(
  rootReducer,
  {
    products:[]
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch({
    type: "setCurrentUser",
    payload: jwt.decode(localStorage.jwtToken)
  });
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
