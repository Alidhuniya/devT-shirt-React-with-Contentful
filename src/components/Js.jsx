import React, { Component, Fragment } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "../sass/3-layout/_reactpaginate.scss";
import Jstemplate from './Jstemplate';



export default class Js extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 3,
      currentPage: 0
    }
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  receivedData() {
    axios
      .get("https://devswag.herokuapp.com/js?_sort=id:DESC")
      .then((res) => {
        const data = res.data;
        console.log(data);
        const slice = data.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );

      
       
        const postData = slice.map((js, key) => (
          
         
          <React.Fragment>
          
            <Jstemplate js={js} />
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
        <Fragment>
      <div className = "item">


     
        {this.state.postData}
       
      </div>
        <div className = "react-paginate">
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
</Fragment>
    );
  }
}
