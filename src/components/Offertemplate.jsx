import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./../sass/3-layout/_offertemplate.scss";

function Offertemplate(props) {
	return (
		<Fragment>
			<div>
				<Link to={`/offers/${props.offer.id}`}>
					<div className="offer">
						<div className="offer__container">
							<div className="offer__thumb">
                <img className = "offer__img" src = {props.offer.thumbnail.url} alt="thumbnail-img" />
              </div>
              <h1>{props.offer.title}</h1>
              <p>{props.offer.price}</p>
              <p>{props.offer.discount}</p>
              <p>{props.offer.callnow}</p>
						</div>
					</div>
				</Link>
			</div>
		</Fragment>
	);
}

export default Offertemplate;
