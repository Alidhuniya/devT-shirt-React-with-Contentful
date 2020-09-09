import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./../sass/3-layout/_offertemplate.scss";


export default function Jstemplate(props) {
	return (
		<Fragment>
			<div >
				<Link to={`/js/${props.js.id}`}>
					<div className="offer">
						<div className="offer__container">
							<div className="js__thumb">
                <img className = "offer__img" src = {props.js.thumbnail.url} alt="thumbnail-img" />
              </div>
              <h1 className = "offer__h1 offer__ele">{props.js.title}</h1>
              <p className = "offer__p offer__ele"> <span className = "offer__price">Price:</span><span className="offer__rs">RS-{props.js.price}</span></p>
              <p className = "offer__desc offer__ele">{props.js.desc}</p>
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


