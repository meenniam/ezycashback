const initialState = {
  selected: 1,
  selectPro: {}
}

export default function productDetail(state = initialState , action={}){

  switch (action.type) {
    case 'changeID':
      return {
        ...state,
        selected : action.payload
      }
    case 'SELECTPRO':
      return {
        ...state,
        selectPro : action.payload
      }
      break;
    default:
      return state;

  }

}

export function selectedProduct(select){
  return {
    type: 'changeID',
    payload:select
  }
}

export function selectProduct(selectpro,id){
  return {
    type: 'SELECTPRO',
    payload:{selectpro,id}
  }
}
