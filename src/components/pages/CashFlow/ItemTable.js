import React, { Component } from 'react';

//import { Button, Modal, Form, ModalHeader, ModalBody } from 'reactstrap';
import ItemRow from './ItemRow';

class ItemTable extends Component {
  constructor(props) {
      super(props);

      this.state = {
          purchases: props.purchases,
          editModal: false,
          deleteModal: false,
          id: 0,
          name: '',
          amount: '',
          category: ''
      };

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleAmountChange = this.handleAmountChange.bind(this);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);

      this.toggleEdit = this.toggleEdit.bind(this);
      this.toggleDelete = this.toggleDelete.bind(this);

      this.showAction = this.showAction.bind(this);
      this.updatelivingPurchase = this.updatelivingPurchase.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.cancelEdit = this.cancelEdit.bind(this);
      this.cancelDelete = this.cancelDelete.bind(this);

  }

  componentWillReceiveProps(nextProps) {
      // You don't have to do this check first, but it can help prevent an unneeded render
      console.log("PROPS UPDATED!!!!: ", nextProps);
      this.setState({ purchases: nextProps.purchases });
      console.log("Updated purchases: ", this.state.purchases);
  }

  showAction(action, item) {
      console.log("Action being requested: ", action);
      console.log("Passing up the item to do action on: ", item);

      // set current variables to the item being edited or deleted
      this.setState({
          id: item.id,
          name: item.name,
          amount: item.amount,
          category: item.category
      });

      if(action === "edit") {
        this.toggleEdit();
      }

      if(action === "delete") {
        this.toggleDelete();
      }
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

  updatelivingPurchase(e) {
      if (!this.state.name == "" && !this.state.amount == "") {
        let newItem = {
            id: this.state.id,
            name: this.state.name,
            amount: this.state.amount,
            category: this.state.category
        };

        console.log(newItem);

        document.getElementsByClassName("editModal")[0].click(); // Force to close

        this.props.updateItem(newItem);
        this.setState({name: '', category: '', amount: ''});
      } else {
        e.preventDefault();
        alert("Missing fields! Please Fill out all Fields!")
      }
  }

  toggleEdit() {
      this.setState({
          editModal: !this.state.editModal
      });
  }

  toggleDelete() {
      this.setState({
          deleteModal: !this.state.deleteModal
      });
  }

  deleteItem(e) {
      e.preventDefault();
      this.props.deleteItem(this.state.id);
      document.getElementsByClassName("deleteModal")[0].click(); // Force to close

  }

  cancelEdit() {
      document.getElementsByClassName("editModal")[0].click(); // Force to close
  }

  cancelDelete() {
      console.log("Cancelled. Close it.");
      document.getElementsByClassName("deleteModal")[0].click(); // Force to close
  }

  render() {
      let purchaseRows = this.state.purchases
          .filter(purchase => (
              purchase.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) > -1 ||
              purchase.category.toLowerCase().indexOf(this.props.filterText.toLowerCase()) > -1))
          .map( purchase => {
              return <ItemRow triggerAction={this.showAction} purchase={purchase} key={purchase.id} />
          });

      return (
        <div>
          <table className="table table-striped">
              <thead>
              <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Category</th>
              </tr>
              </thead>
              <tbody>{purchaseRows}</tbody>
          </table>

          <div>
            <div className="modal fade container-fluid editModal" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <h2>Edit Purchase</h2>
                    <form id="editPurchaseForm" onSubmit={this.updatelivingPurchase}>
                        <div className="form-group">
                            <label htmlFor="currentInputPurchase">Purchase</label>
                            <input type="text" onChange={this.handleNameChange} value={this.state.name} className="form-control" id="currentInputPurchase" placeholder="Purchase Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="currentInputAmount">Amount</label>
                            <div className="input-group">
                                <div className="input-group-addon">$</div>
                                <input type="text" onChange={this.handleAmountChange} value={this.state.amount} className="form-control" id="currentInputAmount" placeholder="Amount" />
                                <div className="input-group-addon">.00</div>
                            </div>
                        </div>
                        <label htmlFor="currentCategoryDropdown">Category</label>
                        <select onChange={this.handleCategoryChange} id="currentCategoryDropdown" value={this.state.category} className="form-control" placeholder="Type..">
                            <option value="-1">-- Select Category --</option>
                            <option>Misc.</option>
                            <option>Credit Card Payment</option>
                            <option>Food</option>
                            <option>Entertainment</option>
                            <option>Transportation</option>
                            <option>Utility</option>
                        </select>
                        <button type="submit" className="btn btn-success">Save</button>
                        <button type="button" className="btn btn-danger" onClick={this.cancelEdit}>Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>



      )
  }
}

export default ItemTable;
