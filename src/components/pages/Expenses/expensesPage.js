import React, { Component } from 'react';

import FilterableExpenseTable from './FilterableExpenseTable';

class Expensespage extends Component {
    /*
    constructor() {
        super();
    }
    */

    render() {
      return (
          <div className="container-fluid">
            <FilterableExpenseTable />
          </div>
      );
    }
}

export default Expensespage;
