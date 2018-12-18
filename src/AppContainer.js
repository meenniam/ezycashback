import { connect } from 'react-redux';
import App from './App';
import { getItems, getCurrency, getTotal, removeFromCart , getAmount ,isInCart } from './Dux/cart';
import {withRouter} from 'react-router-dom'
const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props),
        amount: getAmount(state,props),
        isInCart: isInCart(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
