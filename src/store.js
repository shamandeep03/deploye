import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { templatesReducers } from './Redux/Reducers/TemplateReducers'
const initialState = {
}
const reducers = combineReducers({

    template: templatesReducers

})
const middleware = [thunk]
const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store
