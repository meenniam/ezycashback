


const initialState = {
  profile:{}
}

export default function authReducer(state = initialState , action = {}){
  switch (action.type) {
    case 'setProfile':
        state={
          ...state,
          profile: action.payload
        }
      break;
      default:
  }
  return state
}

export function setProfile(profile){
  return {
    type: 'setProfile',
    payload: profile
  }
}
