import React, { Component } from 'react';

class ItemRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expense: this.props.expense
        };

        this.triggerEdit = this.triggerEdit.bind(this);
        this.triggerDelete = this.triggerDelete.bind(this);
    }

    triggerEdit() {
        this.props.triggerAction('edit', this.state.expense);
    }

    triggerDelete() {
        this.props.triggerAction('delete', this.state.expense);
    }

    render() {
        //let expense = this.props.expense;

        return (
            <tr>
                <td>{this.state.expense.name}</td>
                <td>{this.state.expense.amount}</td>
                <td>{this.state.expense.category}</td>
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
