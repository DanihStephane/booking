import { combineReducers } from "@reduxjs/toolkit"
import registerReducer from "./auth/registerSlice"
import loginReducer from "./auth/loginSlice"

// Create a root reducer that combines all slice reducers
// Currently empty and ready to accept slice reducers as they are created
const rootReducer = combineReducers({
    register: registerReducer,
    login : loginReducer,
    // auth: authReducer,
    // user: userReducer,
    // products: productsReducer,
})

// Export the combined reducer to be used in the store configuration
export default rootReducer