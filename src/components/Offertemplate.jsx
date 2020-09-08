import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Offertemplate(props) {
  return (
    <Fragment>
    <div className = "search" >
    
    </div>
      <div>
        <Link to={`/offers/${props.post.id}`}>
          <div className="image">
         <h1>{props.post.title}</h1>
          </div>
        </Link>
      </div>
    </Fragment>
  );
}

export default Offertemplate;


