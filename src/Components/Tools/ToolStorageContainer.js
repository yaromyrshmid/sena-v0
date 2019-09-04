import React, { Component } from 'react';
import { ToolStorage } from './ToolStorage';

export class ToolStorageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'storage',
      toolsStorage: [
        {id: 'planerA4-green', name: 'Піжама з єдинорогом', category: 'товар', color: 'зелений', quantity: 10, cost: 200, sellPrice: 700},
        {id: 'planerA4-red', name: 'Піжама з єдинорогом', category: 'товар', color: 'червоний', quantity: 14, cost: 200, sellPrice: 840},
        {id: 'planerA5-yellow', name: 'Піжама з котом', category: 'товар', color: 'жовтий', quantity: 12, cost: 220, sellPrice: 740},
        {id: 'planerA5-black', name: 'Піжама з котом', category: 'товар', color: 'чорний', quantity: 10, cost: 220, sellPrice: 500},
        {id: 'planerA5-black-sticker', name: 'Наліпка з єдинорогом', category: 'супутній товар', color: 'чорний', quantity: 100, cost: 20},
        {id: 'planerA5-red-sticker', name: 'Наліпка з котом', category: 'супутній товар', color: 'червоний', quantity: 100, cost: 20},
        {id: 'planerA5-package', name: 'Пакет великий', category: 'упаковка', quantity: 100, cost: 10},
        {id: 'planerA4-package', name: 'Пакет малий', category: 'упаковка', quantity: 100, cost: 5}
      ],
      showAddToStorageModal: false
    };
  }
  
  sellFromStorage = (index) => {
    const toolsStorage = [...this.state.toolsStorage];
    toolsStorage[index].quantity--
    this.setState({ toolsStorage: toolsStorage});
  }

  //AddToStorage Modal
  handleShowAddToStorageModal = () => {
    this.setState({ showAddToStorageModal: true});
  }

  handleCloseAddToStorageModal = () => {
    this.setState({ showAddToStorageModal: false});
  }

  render () {

    return (
      <ToolStorage 
      id={this.state.id}
      toolsStorage={this.state.toolsStorage} 
      click_sell={this.sellFromStorage} 
      click_add={this.handleShowAddToStorageModal} 
      showAddToStorageModal={this.state.showAddToStorageModal}
      hideAddToStorageModal={this.handleCloseAddToStorageModal}
      />
    )
  }
}