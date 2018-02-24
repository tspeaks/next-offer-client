import React from "react";

const Landing = () => {
	return (
		<div className="card blue-grey lighten-2">
			<div className="card-content">
				<div style={{ textAlign: "center" }}>
					<h2 className="white-text">Welcome to NextOffer!</h2>
					<p className="white-text">
					NextOffer is a utility for reaching out to prior customers
					with subsequent offers.
					<br />
					<br />
					You simply type out the offer in an email to be sent to your
					customers and submit. From there you can review previous
					offers you have sent.
					<br />
					<br />
					To begin, click the, "Login with Google" button in the top
					right. After logging in click the "+" button in the bottom
					right to create a new offer.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
