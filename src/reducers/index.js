import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import offersReducer from "./offersReducer";

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	offers: offersReducer
});
