import { ActionTypes } from "../constants/action-types"
import apiCall from "../../apis/apiCall"

export const setProducts=(products)=>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const fetchProducts=()=>async(dispatch)=>{
    const response = await apiCall.get('/loaddata')
    dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
}

export const selectedProduct=(pid)=>async(dispatch)=>{
    const response = await apiCall.get(`/loaddata/${pid}`)
    dispatch({type:ActionTypes.SELECTED_PRODUCT,payload:response.data})
    
}


