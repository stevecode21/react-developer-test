import {types} from './userReducer'

export const storeContries = (response) => ({
    type: types.COUNTRIES_LIST,
    payload: response
})

export const newAddress = (response) => ({
    type: types.NEW_ADDRESS,
    payload: response
})

export const deleteAddress = (response) => ({
    type: types.DELETE_ADDRESS,
    payload: response
})