export const types = {
  COUNTRIES_LIST: 'COUNTRIES_LIST',
  NEW_ADDRESS: 'NEW_ADDRESS',
  DELETE_ADDRESS: 'DELETE_ADDRESS'
}

const initialState = {
  countries: [],
  addresses: []
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.COUNTRIES_LIST :
      return {
        ...state,
        countries: action.payload
      }
    case types.NEW_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.concat(action.payload)
      }
    case types.DELETE_ADDRESS:
      return {
        ...state,
        addresses: [
          ...state.addresses.slice(0, action.payload),
          ...state.addresses.slice(action.payload + 1)
        ]
      }
    default:
      return state
      break;
  }
};