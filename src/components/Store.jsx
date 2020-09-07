import React, { Fragment, Component } from "react";
import { Client } from "./../Client.js";
import "../sass/3-layout/_store.scss";

class Store extends Component {
	constructor(props) {
		super(props);
		this.state = {
			section: "",
		};
	}

	componentDidMount() {
		// Client.getEntry("4n1hXyTxaIEd1CwMRE6v5x")
		//   .then((response) => {
		//       const data = response.fields;

		//     //   const entries = response.fields;
		//     //   console.log(entries)
		//     // console.log(response);

		//       this.setState ({
		//           section: data
		//       })
		//       console.log(this.state.section);
        //   })
        

        // get the specific content type with all entries inside that content type and you can limit the number
        Client.getEntries({
            'content_type': 'offertshirt',
            'limit': 3,
          })
          .then(function (entries) {
             console.log(entries);
          })
        
         //  get all entries
            // Client.getEntries()
			// .then(function (entries) {
			// 	console.log(entries);
            // })

            .catch(console.error);
 

    }
    

	render() {
		// const view = this.state.section;

		// console.log(view);

		return <Fragment>hello</Fragment>;
	}
}

export default Store;
