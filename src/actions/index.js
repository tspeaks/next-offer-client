import axios from "axios";
import { FETCH_USER, FETCH_OFFERS } from "./types";

export const fetchUser = () => async dispatch => {
	const res = await axios.get("https://next-offer-server.herokuapp.com/api/current_user");

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
	const res = await axios.post("https://next-offer-server.herokuapp.com/api/stripe", token);

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitOffer = (values, history) => async dispatch => {
	const res = await axios.post("https://next-offer-server.herokuapp.com/api/offers", values);

	history.push("/offers");
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchOffers = () => async dispatch => {
	const res = await axios.get("https://next-offer-server.herokuapp.com/api/offers");

	dispatch({ type: FETCH_OFFERS, payload: res.data });
};
