import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="footer-content">
				{/* Left Section */}
				<div className="left">
					<h1>Penang Paradise</h1>
					<div className="icon">
						<i className="fa-brands fa-facebook-square"></i>
						<i className="fa-brands fa-instagram-square"></i>
						<i className="fa-brands fa-twitter-square"></i>
						<i className="fa-solid fa-envelope"></i>
					</div>
				</div>

				{/* Right Section */}
				<div className="right">
					<h2>Meet Our Team</h2>
					<div className="team">
						<div className="teammate">
							<div>
								<img
									src="https://media.licdn.com/dms/image/v2/D5603AQGO0DlpznWbWw/profile-displayphoto-shrink_800_800/B56ZQ7bdgSHoAg-/0/1736163842660?e=1741824000&v=beta&t=QF2LmX4W4zXVsBCeFD2f9c0a_l1esrNvEQGXIv8PGqk"
									alt="Xuan Hern"/>
								<span>Ng Xuan Hern: 22304061</span>
							</div>

							<div>
								<img
									src="https://media.licdn.com/dms/image/v2/D5603AQExHCNclrsxUg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724400230524?e=1741824000&v=beta&t=hSD-2M-qp2NHujQX39F0blwHbeD-CxzPfnL56xArSSQ"
									alt="Abu"/>
								<span>Ammar Danial Abdullah: 22301793</span>
							</div>
							<div>
								<img
									src="https://media.licdn.com/dms/image/v2/D5603AQHyfbXhBEYy9w/profile-displayphoto-shrink_800_800/B56ZQm2XKqH0Ac-/0/1735818573147?e=1741824000&v=beta&t=VmNUayMOFmd71bV55xI6TqUeyAesdjpUWmyiHeboPts"
									alt="Low Yvonne"/>
								<span>Low Yvonne: 22305530</span>
							</div>
						</div>
					</div>
				</div>
		</div>
		</div>
	);
}

export default Footer;
