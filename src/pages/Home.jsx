import React, { Component, Fragment } from 'react';
import Homecontent from './../components/Homecontent';
import Storepage from './Storepage';


export default class Home extends Component {
    render() {
        return (
           
                <Fragment>
              <Homecontent />
              <Storepage />
                </Fragment>
          
        )
    }
}
