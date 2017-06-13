import React, { Component } from 'react';

class ItemRow extends Component {
  constructor(props) {
      super(props);

      this.state = {
          purchase: this.props.purchase
      };

      this.triggerEdit = this.triggerEdit.bind(this);
      this.triggerDelete = this.triggerDelete.bind(this);
  }

  triggerEdit() {
      this.props.triggerAction('edit', this.state.purchase);
  }

  triggerDelete() {
      this.props.triggerAction('delete', this.state.purchase);
  }

  render() {
      //let purchase = this.props.purchase;

      return (
          <tr>
              <td>{this.state.purchase.name}</td>
              <td>{this.state.purchase.amount}</td>
              <td>{this.state.purchase.category}</td>
              <td>
                  <div className="action-buttons pull-right">
                      <span onClick={this.triggerEdit} className="glyphicon glyphicon-pencil edit" aria-hidden="true" data-toggle="modal" data-target=".editModal"></span>
                      <span onClick={this.triggerDelete} className="glyphicon glyphicon-trash delete" aria-hidden="true" data-toggle="modal" data-target=".deleteModal"></span>
                  </div>
              </td>
          </tr>
      );
  }
}

export default ItemRow;
