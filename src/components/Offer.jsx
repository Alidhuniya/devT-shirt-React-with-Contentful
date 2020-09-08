

import React, { Component } from "react";
import "../sass/3-layout/_offer.scss";
import axios from "axios";
import Offertemplate from './Offertemplate';


export default class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  receivedData() {
    axios
      .get("https://devswag.herokuapp.com/offers?_sort=id:DESC")
      .then((res) => {
        const data = res.data;
        console.log(data);
        

      
        <h1>Best Offer</h1>
        const postData = data.map((offer, key) => (
          
         
          <React.Fragment>
          
            <Offertemplate offer={offer} />
            {/* <p>Contents: {post.content} </p> */}
          </React.Fragment>
        ));

        this.setState({
          
          postData
        });
      });
  }


  componentDidMount() {
    this.receivedData();
  }


  render() {

    
    return (
      <div>
        {this.state.postData}
      </div>
    );
  }
}
