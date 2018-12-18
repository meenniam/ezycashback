


const initialState = {

  page:'home',
  click: true
}

export default function authReducer(state = initialState , action = {}){
  switch (action.type) {
    case 'setPage':
        state={
          ...state,
          page:action.payload.page,
          click: action.payload.click
        }

      break;
      default:
  }
  return state
}


export function setPage(page,click){
  return {
    type: 'setPage',
    payload: {page,click}
  }
}
