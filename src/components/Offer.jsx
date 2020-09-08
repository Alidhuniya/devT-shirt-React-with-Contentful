

import React, { Component } from "react";
import "../sass/3-layout/_offer.scss";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Offertemplate from './Offertemplate';


export default class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 1,
      currentPage: 0
    }
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  receivedData() {
    axios
      .get("https://devswag.herokuapp.com/offers")
      .then((res) => {
        const data = res.data;
        console.log(data);
        const slice = data.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );

      
       
        const postData = slice.map((post, key) => (
          
         
          <React.Fragment>
          
            <Offertemplate post={post} />
            {/* <p>Contents: {post.content} </p> */}
          </React.Fragment>
        ));

        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),

          postData
        });
      });
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset
      },
      () => {
        this.receivedData();
      }
    );
  };


 

  componentDidMount() {
    this.receivedData();
  }


  render() {

    
    return (
      <div>


     
        {this.state.postData}
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}
