


const initialState = {

  dataForget:{}
}

export default function authReducer(state = initialState , action = {}){
  switch (action.type) {
    case 'setDataForget':
        state={
          ...state,
          dataForget:action.payload
        }

      break;
      default:
  }
  return state
}


export function setDataForget(data){
  return {
    type: 'setDataForget',
    payload: data
  }
}
