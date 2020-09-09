

import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Magnifier from "react-magnifier";
import "./../sass/3-layout/_item.scss";


function Offeritem() {
  const { id } = useParams();

  const url = `https://devswag.herokuapp.com/offers/${id}`;
  const [singleItem, setItem] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setItem(response.data);
    });
  }, [url]);

  if (singleItem) {
    return (content = (
      <Fragment>
        <div className = "item other-item">
       <div className = "item__img">
       <Magnifier src={singleItem.thumbnail.url}  height = {400}  />
       </div>
       <div className = "item__rightContent">
      <h1 className = "item__h1">{singleItem.title}</h1>
      <p className = "item__desc">{singleItem.desc}</p>
      <p className = "offer__p offer__ele"> <span className = "offer__price">Price:</span><span className="offer__rs">RS-{singleItem.price}</span></p>
      <p className = "offer__p1 offer__ele"><span className = "offer__price">Discount:</span><span className="offer__rs offer__discount">{singleItem.discount}</span></p>
      
      <div className = "item__btnBlock">
          <button title = "Call-Now" className =" item__btn">Call Now for Home Delivery: {singleItem.callnow}</button>
       </div>
      
       </div>

      </div>
      </Fragment>
      
    ));
  }

  return <div>{content}</div>;
}

export default Offeritem;

