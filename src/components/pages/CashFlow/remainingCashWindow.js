import React, { Component } from 'react';

//import ItemRow from './ItemRow';

class Remainingcash extends Component {

    constructor() {
        super();

        this.state = {

        };
    }


    render() {
        return (
          <div id="cashWindow">
            <div className="jumbotron">
              <h1>Cash Flow!</h1>
              <p>"Use this area to keep track of all your ordinary purchases."</p>
            </div>
          </div>
        )
    }
}

export default Remainingcash;
