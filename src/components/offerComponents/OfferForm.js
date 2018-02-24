import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import OfferField from "./OfferField";
import { Link } from 'react-router-dom';
import validateEmails from '../../utilities/validateEmails';
import formFields from './formFields';

class OfferForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name }) => {
			return (
				<Field
					key={name}
					component={OfferField}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<form
					onSubmit={this.props.handleSubmit(this.props.onOfferSubmit)}>
					{this.renderFields()}
					<Link to="/offers" className=" red darken-2 btn-flat white-text">
						Cancel
					</Link>
					<button type="submit" className="green lighten-1 btn-flat right white-text">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.recipients = validateEmails(values.recipients || '');

	_.each(formFields, ({ name, noValueError }) => {
		if (!values[name]) {
			errors[name] = noValueError;
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: "newOffer",
	destroyOnUnmount: false
})(OfferForm);
