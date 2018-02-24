import _ from 'lodash';
import React from "react";
import { connect } from "react-redux";
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const OfferReview = ({ onCancel, formValues, submitOffer, history }) => {
	const fieldsList = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>
					{formValues[name]}
				</div>
			</div>
		);
	});

	return (
		<div>
			<h4>Please Confirm you Offer</h4>
			{fieldsList}
			<button
				className="blue-grey lighten-2 white-text btn-flat"
				onClick={onCancel}
			>
				Back
			</button>
			<button onClick={() => submitOffer(formValues, history)}
					className="green lighten-1 btn-flat right white-text"
					>
				Send Offer
				<i className="material-icons right">email</i>
			</button>
		</div>
	);
};
function mapStateToProps(state) {
	return {
		formValues: state.form.newOffer.values
	};
}

export default connect(mapStateToProps, actions)(withRouter(OfferReview));
