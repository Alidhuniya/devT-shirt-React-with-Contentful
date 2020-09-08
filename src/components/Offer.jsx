
import React, { Component } from "react";
import { Client } from "../Client.js";
import "../sass/3-layout/_offer.scss";
// import ReactPaginate from "react-paginate";
import Offertemplate from './Offertemplate';


export default class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
    //   perPage: 2,
    //   currentPage: 0
    }
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  receivedData() {
   
	Client.getEntries({
		'content_type': 'offertshirt',
		'limit': 3,
	  })
	  .then((res) => {
		// console.log(res);
		const data = res.items;
        console.log(data);
        const slice = data.slice(
          this.state.offset,
        //   this.state.offset + this.state.perPage
		);

		const postData = slice.map((offer, key) => (
          
         
			<React.Fragment>
			
			  <Offertemplate offer={offer} />
			  {/* <p>Contents: {post.content} </p> */}
			</React.Fragment>
		  ));
  
		  this.setState({
			// pageCount: Math.ceil(data.length / this.state.perPage),
  
			postData
		  });
		
		  });

   
  }
  handlePageClick = (e) => {
    // const selectedPage = e.selected;
    // const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        // currentPage: selectedPage,
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
        {/* <ReactPaginate
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
        /> */}
      </div>
    );
  }
}
