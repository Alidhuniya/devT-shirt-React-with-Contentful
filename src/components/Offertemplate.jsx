import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.scss";

function Offertemplate(props) {
  return (
    <Fragment>
    <div className = "search" >
    
    </div>
      <div>
        <Link to={`${props.offer.sys.id}`}>
          <div className="image">
         <img className = "img" src = {props.offer.fields.offerimg.fields.file.url} alt="t-shhirt" />
          </div>
        </Link>
      </div>
    </Fragment>
  );
}

export default Offertemplate;


