


const initialState = {

  memberActive:[],
  isLoading: true
}

export default function authReducer(state = initialState , action = {}){
  switch (action.type) {
    case 'setMemberAcive':
        state={
          ...state,
          memberActive:action.payload,
          isLoading:false
        }
    case 'removeMemberAcive':
        state={
          ...state,
          memberActive: state.memberActive.filter(id => id.username !== action.payload)
        }
      break;
      default:
  }
  return state
}


export function setMemberAcive(member){
  return {
    type: 'setMemberAcive',
    payload: member
  }
}

export function removeMemberAcive(username){
  return {
    type: 'removeMemberAcive',
    payload: username
  }
}
