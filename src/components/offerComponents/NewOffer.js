import React, { Component } from "react";
import { reduxForm } from 'redux-form';
import OfferForm from "./OfferForm";
import OfferFormReview from "./OfferFormReview";

class NewOffer extends Component {
	state = { showFormReview: false };

	renderContent() {
		if (this.state.showFormReview) {
			return (
				<OfferFormReview
					onCancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}
		return (
			<OfferForm
				onOfferSubmit={() => this.setState({ showFormReview: true })}
			/>
		);
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

export default reduxForm({
	form: 'newOffer'
})(NewOffer);
