import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";
import { Client } from "../Client.js";

function Offeritem() {
  const { id } = useParams();
// console.log(id); 
 

  const url = `offertshirt`; // I want to add something like this offertshirt/${id} and with regular url it works, if i do like this e.g "https://schoolsitedemo/eventsblogs/${id}" but with contentful content type id I don't find way to include. Help me
  const [offerItem, setPost] = useState(null);

  let content = null;

  useEffect(() => {
    Client.getEntries({
		'content_type': url,
	  })
	  .then((response) => {
        setPost(response.items);

      });
  }, [url]);

  if (offerItem) {
    return (content = (
      <div>
     {offerItem && offerItem[0].fields.offerdec}
      </div>
    ));
  }

  return <div>{content}</div>;
}

export default Offeritem;
