

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



function Offeritem() {
  const { id } = useParams();

  const url = `https://devswag.herokuapp.com/offers/${id}`;
  const [singlePost, setPost] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  }, [url]);

  if (singlePost) {
    return (content = (
      <div>
       {singlePost.desc}
      </div>
    ));
  }

  return <div>{content}</div>;
}

export default Offeritem;

