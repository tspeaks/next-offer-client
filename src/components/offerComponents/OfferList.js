import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOffers } from "../../actions";

class OfferList extends Component {
	componentDidMount() {
		this.props.fetchOffers();
	}

	renderOffers() {
		return this.props.offers.reverse().map(offer => {
			return (
				<div className="card blue-grey lighten-2" key={offer.id}>
					<div className="card-content">
						<span className="card-title white-text">
							{offer.title}
						</span>
						<p className="white-text">{offer.body}</p>
						<p className="right white-text">
							Sent On: {new Date(offer.dateSent).toLocaleDateString()}
						</p>
					</div>
					<div className="card-action disabled">
						<a className="amber-text lighten-3">Yes: {offer.yes}</a>
						<a className="amber-text lighten-3">No: {offer.no}</a>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				{this.renderOffers()}	
			</div>
		);
	}
}

function mapStateToProps({ offers }) {
	return { offers };
}

export default connect(mapStateToProps, { fetchOffers })(OfferList);
