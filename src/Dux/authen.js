import isEmpty from 'lodash/isEmpty'


const initialState = {
  isAuthenticate:false,
  user:{}
}

export default function authReducer(state = initialState , action = {}){
  switch (action.type) {
    case 'setCurrentUser':
        state={
          ...state,
          isAuthenticate: !isEmpty(action.payload),
          user: action.payload
        }
      break;
      default:
  }
  return state
}

export function setCurrentUser(user){
  return {
    type: 'setCurrentUser',
    payload: user
  }
}
