import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./../sass/3-layout/_offertemplate.scss";


function Offertemplate(props) {
	return (
		<Fragment>
			<div >
				<Link to={`/offers/${props.offer.id}`}>
					<div className="offer">
						<div className="offer__container">
							<div className="offer__thumb">
                <img className = "offer__img" src = {props.offer.thumbnail.url} alt="thumbnail-img" />
              </div>
              <h1 className = "offer__h1 offer__ele">{props.offer.title}</h1>
              <p className = "offer__p offer__ele"> <span className = "offer__price">Price:</span><span className="offer__rs">RS-{props.offer.price}</span></p>
              <p className = "offer__p1 offer__ele"><span className = "offer__price">Discount:</span><span className="offer__rs offer__discount">{props.offer.discount}</span></p>
              <p className = "offer__desc offer__ele">{props.offer.desc}</p>
              <div className = "offer__btnBlock">
                <button className =" offer__btn">Check it out</button>
              </div>
						</div>
					</div>
				</Link>
			</div>
		</Fragment>
	);
}

export default Offertemplate;
