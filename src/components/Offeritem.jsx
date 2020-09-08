

import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Magnifier from "react-magnifier";


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
        <div className = "item">
       <div className = "item__img">
       <Magnifier src={singleItem.thumbnail.url} width={500} height = {300} />
       </div>
       <div className = "item__rightContent">
      <h1>{singleItem.title}</h1>
      <p>{singleItem.desc}</p>
      <p>{singleItem.price}</p>
      <p>{singleItem.discount}</p>
      <div className = "callnow">
      <button className ="item__btn">{singleItem.callnow}</button>
      </div>
       </div>

      </div>
      </Fragment>
      
    ));
  }

  return <div>{content}</div>;
}

export default Offeritem;

