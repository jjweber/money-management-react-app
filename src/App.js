import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
  //Link
} from 'react-router-dom';

// Components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/Home/homePage';
import Expensespage from './components/pages/Expenses/expensesPage';
import Cashflowpage from './components/pages/CashFlow/cashFlowPage';

/*
import createExpenseRow from '../components/createExpenseRow';
import expenseRow from '../components/expenseRow';
import _ from 'lodash';
import addExpense from '../actions/addExpense';
import deleteExpense from '../actions/deleteExpense';
*/

// Includes
import './Assets/css/default.min.css';

class App extends Component {

    render() {
      return (
        <Router>
          <div className="App">
            < Header />
              <Route exact path='/' component={Homepage} />
              <Route exact path='/Expenses' component={Expensespage} />
              <Route exact path='/Cash Flow' component={Cashflowpage} />
            < Footer />
          </div>
        </Router>
      );
    }
}

export default App;
