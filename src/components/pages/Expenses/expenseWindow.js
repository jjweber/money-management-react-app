import React, { Component } from 'react';

//import ItemRow from './ItemRow';

class Expensewindow extends Component {

    constructor() {
        super();

        this.state = {

        };
    }


    render() {
        return (
          <div id="expensePageWindow">
            <div className="jumbotron">
              <h1>Expenses</h1>
              <p>"Use this area to keep track of all your monthly expenses."</p>
            </div>
          </div>
        )
    }
}

export default Expensewindow;
