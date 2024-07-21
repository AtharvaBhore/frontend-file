import{ combineReducers } from 'redux'
import { productRedducer } from './reducers/productReducer'


const rootReducer=combineReducers({
    allProducts:productRedducer
})

export default rootReducer