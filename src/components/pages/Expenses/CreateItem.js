
import React, { Component } from 'react';

class CreateItem extends Component {
    constructor() {
        super();

        this.state = {
            modal: false,
            testmodal: false,
            testText: '',
            name: '',
            amount: '',
            category: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);

        this.saveLivingExpense = this.saveLivingExpense.bind(this);
        this.cancelAdd = this.cancelAdd.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleAmountChange(event) {
        this.setState({amount: event.target.value});
    }

    handleCategoryChange(event) {
        this.setState({category: event.target.value});
    }

    saveLivingExpense(e) {
        e.preventDefault();
        if (!this.state.name == "" && !this.state.amount == "") {
          let livingExpense = {
              name: this.state.name,
              amount: this.state.amount,
              category: this.state.category
          };

          console.log("Saving livingExpense", livingExpense);

          this.props.save(livingExpense);

          this.setState({name: '', category: '', amount: ''});
          document.getElementsByClassName("modal")[0].click();
        } else {
          alert("Missing fields! Please Fill out all Fields!")
        }

    }

    cancelAdd(e) {
        console.log("Cancelled. Close it.");
        document.getElementsByClassName("modal")[0].click(); // Force to close
    }

    render() {

        return (
            <div>
                <button type="button" className="btn btn-success btn-lg btn-block addExpenseBtn" data-toggle="modal" data-target=".addExpenseModal">
                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add Expense
                </button>
                <div id="" className="modal fade container-fluid addExpenseModal" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <h2>Add Expense</h2>
                            <form id="addExpenseForm" onSubmit={this.saveLivingExpense}>
                                <div className="form-group">
                                    <label htmlFor="inputExpense">Expense</label>
                                    <input type="text" onChange={this.handleNameChange} value={this.state.name} className="form-control" id="inputExpense" placeholder="Expense Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAmount">Amount</label>
                                    <div className="input-group">
                                        <div className="input-group-addon">$</div>
                                        <input type="text" onChange={this.handleAmountChange} value={this.state.amount} className="form-control" id="inputAmount" placeholder="Amount" />
                                        <div className="input-group-addon">.00</div>
                                    </div>
                                </div>
                                <label htmlFor="categoryDropdown">Category</label>
                                <select onChange={this.handleCategoryChange} id="categoryDropdown" value={this.state.category} className="form-control" placeholder="Type..">
                                    <option value="none">-- Select Category --</option>
                                    <option>Misc.</option>
                                    <option>Credit Card Payment</option>
                                    <option>Food</option>
                                    <option>Entertainment</option>
                                    <option>Transportation</option>
                                    <option>Utility</option>
                                </select>
                                <button type="submit" className="btn btn-success">Save</button>
                                <button type="button" className="btn btn-danger" onClick={this.cancelAdd}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateItem;
