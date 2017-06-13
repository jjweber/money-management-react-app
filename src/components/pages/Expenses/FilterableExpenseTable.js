import React, { Component } from 'react';

import Expensewindow from './expenseWindow';
import SearchBar from './SearchBar';
import ItemTable from './ItemTable';
import CreateItem from './CreateItem';

class FilterableExpenseTable extends Component {
    constructor() {
        super();

        let storeData = JSON.parse(localStorage.getItem('expenseData'));

        if(!storeData) {
            storeData = [];
        }

        console.log("Store Data: ", storeData);

        this.state = {
            filterText: '',
            expenses: storeData,
        };

        this.update = this.update.bind(this);
        this.remove = this.update.bind(this);

        this.saveNewItem = this.saveNewItem.bind(this);
        this.saveExistingItem = this.saveExistingItem.bind(this);
        this.removeExistingItem = this.removeExistingItem.bind(this);
    }

    update(e) {
        this.setState({filterText: e.target.value})
    }

    remove(e) {
        this.setState({filterText: e.target.value})
    }

    saveNewItem(item) {
        let tempExpenses = this.state.expenses;
        item.id = tempExpenses.length;
        tempExpenses.push(item);

        this.setState({expenses: tempExpenses});
        localStorage.setItem('expenseData', JSON.stringify(tempExpenses));
    }

    removeExistingItem(id) {
        let currentData = this.state.expenses;
        currentData.splice(id, 1);
        localStorage.setItem('expenseData', JSON.stringify(currentData));
        this.setState({expenses: currentData});
    }

    saveExistingItem(newItem) {
        console.log("SaveExisting triggered. Item: ", newItem);

        let updatedExpense = this.state.expenses
            .map( expense => {
                if(expense.id === newItem.id) expense = newItem;
                return expense;
            });

        this.setState({expenses: updatedExpense});
        localStorage.setItem('expenseData', JSON.stringify(updatedExpense));
    }

    render() {
        return (
            <div>
                <Expensewindow />
                <div className="row">
                    <CreateItem save={this.saveNewItem}/>
                </div>
                <SearchBar txt={this.state.filterText} update={this.update} />
                <ItemTable updateItem={this.saveExistingItem} deleteItem={this.removeExistingItem} filterText={this.state.filterText} expenses={this.state.expenses} />
            </div>
        );
    }
}

export default FilterableExpenseTable;
