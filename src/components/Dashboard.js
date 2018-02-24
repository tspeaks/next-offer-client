import React from "react";
import { Link } from 'react-router-dom';
import OfferList from './offerComponents/OfferList';

const Dashboard = () => {
	return (
		<div>
			<OfferList />
			<div className="fixed-action-btn">
				<Link to="/offers/new" className="btn-floating btn-large cyan darken-3">
					<i className="material-icons">add</i>
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
