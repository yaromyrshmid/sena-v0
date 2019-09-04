import React, { Component } from 'react';
import { ToolExp } from './ToolExp';

export class ToolExpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'exp',
      toolsExp: [
        {id: 'planerA4-green', name: 'Піжама з єдинорогом', category: 'товар', color: 'зелений', quantity: 20, cost: 4000, toStorage: true},
        {id: 'planerA4-red', name: 'Піжама з єдинорогом', category: 'товар', color: 'червоний', quantity: 14, cost: 3600, toStorage: true},
        {id: 'planerA5-yellow', name: 'Піжама з котом', category: 'товар', color: 'жовтий', quantity: 12, cost: 2200, toStorage: true},
        {id: 'planerA5-black', name: 'Піжама з котом', category: 'товар', color: 'чорний', quantity: 10, cost: 2200, toStorage: true},
        {id: 'planerA5-black-sticker', name: 'Наліпка з єдинорогом', category: 'супутній товар', color: 'чорний', quantity: 100, cost: 2000, toStorage: true},
        {id: 'planerA5-red-sticker', name: 'Наліпка з котом', category: 'супутній товар', color: 'червоний', quantity: 100, cost: 2000, toStorage: true},
        {id: 'planerA5-package', name: 'Пакет великий', category: 'упаковка', quantity: 100, cost: 2000, toStorage: true},
        {id: 'planerA4-package', name: 'Пакет малий', category: 'упаковка', quantity: 100, cost: 500, toStorage: true},
        {id: 'advert', name: 'Реклама в Instagram', category: 'маркетинг', cost: 600, toStorage: false},
        {id: 'cards', name: 'Виготовлення візиток', category: 'маркетинг', quantity: 100, cost: 100, toStorage: false}
      ],
      showAddToExpModal: false
    };
  }
  
  // sellFromStorage = (index) => {
  //   const toolsStorage = [...this.state.toolsStorage];
  //   toolsStorage[index].quantity--
  //   this.setState({ toolsStorage: toolsStorage});
  // }

  //AddToExp Modal
  handleShowAddToExpModal = () => {
    this.setState({ showAddToExpModal: true});
  }

  handleCloseAddToExpModal = () => {
    this.setState({ showAddToExpModal: false});
  }

  render () {

    return (
      <ToolExp 
      id={this.state.id}
      toolsExp={this.state.toolsExp} 
      click_add={this.handleShowAddToExpModal} 
      showAddToExpModal={this.state.showAddToExpModal}
      hideAddToExpModal={this.handleCloseAddToExpModal}
      />
    )
  }
}