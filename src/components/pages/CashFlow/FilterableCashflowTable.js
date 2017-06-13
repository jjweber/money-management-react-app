import React, { Component } from 'react';

import Remainingcash from './remainingCashWindow';
import SearchBar from './SearchBar';
import ItemTable from './ItemTable';
import CreatePurchaseItem from './CreatePurchaseItem';

class FilterableCashflowTable extends Component {
      constructor() {
          super();

          let storeData2 = JSON.parse(localStorage.getItem('purchaseData'));

          if(!storeData2) {
              storeData2 = [];
          }

          console.log("Store Data: ", storeData2);

          this.state = {
              filterText: '',
              purchases: storeData2,
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
          let tempPurchases = this.state.purchases;
          item.id = tempPurchases.length;
          tempPurchases.push(item);

          this.setState({purchases: tempPurchases});
          localStorage.setItem('purchaseData', JSON.stringify(tempPurchases));
      }

      removeExistingItem(id) {
          let currentData = this.state.purchases;
          currentData.splice(id, 1);
          localStorage.setItem('purchaseData', JSON.stringify(currentData));
          this.setState({purchases: currentData});
      }

      saveExistingItem(newItem) {
          console.log("SaveExisting triggered. Item: ", newItem);

          let updatedPurchase = this.state.purchases
              .map( purchase => {
                  if(purchase.id === newItem.id) purchase = newItem;
                  return purchase;
              });

          this.setState({purchases: updatedPurchase});
          localStorage.setItem('purchaseData', JSON.stringify(updatedPurchase));
      }

      render() {
          return (
              <div>
                <Remainingcash />
                <div className="row">
                    <CreatePurchaseItem save={this.saveNewItem}/>
                </div>
                <SearchBar txt={this.state.filterText} update={this.update} />
                <ItemTable updateItem={this.saveExistingItem} deleteItem={this.removeExistingItem} filterText={this.state.filterText} purchases={this.state.purchases} />
              </div>
          );
      }
  }

export default FilterableCashflowTable;
