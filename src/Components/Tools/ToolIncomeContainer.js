import React, { Component } from 'react';
import { ToolIncome } from './ToolIncome';

export class ToolIncomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'income',
      toolsIncome: [
        {
          id: 'deal_0',
          sellPrice: 800,
          items: [
            {id: 'planerA4-green', name: 'Піжама з єдинорогом', category: 'товар', color: 'зелений', quantity: 1, cost: 200 },
            {id: 'planerA5-black-sticker', name: 'Наліпка з єдинорогом', category: 'супутній товар', color: 'чорний', quantity: 1, cost: 20},
            {id: 'planerA4-package', name: 'Пакет малий', category: 'упаковка', quantity: 1, cost: 5, toStorage: true}
          ] 
        },
        {
          id: 'deal_1',
          sellPrice: 1500,
          items: [
            {id: 'planerA5-yellow', name: 'Піжама з котом', category: 'товар', color: 'жовтий', quantity: 1, cost: 200 },
            {id: 'planerA5-yellow', name: 'Піжама з котом', category: 'товар', color: 'чорний', quantity: 1, cost: 200 },
            {id: 'planerA5-red-sticker', name: 'Наліпка з котом', category: 'супутній товар', color: 'червоний', quantity: 1, cost: 20},
            {id: 'planerA5-package', name: 'Пакет великий', quantity: 1, cost: 10, toStorage: true}
          ] 
        },
        {
          id: 'deal_2',
          sellPrice: 300,
          items: [
            {id: 'planerA5-red-sticker', name: 'Наліпка з котом', category: 'супутній товар', color: 'червоний', quantity: 5, cost: 20},
            {id: 'planerA4-package', name: 'Пакет малий', category: 'упаковка', quantity: 1, cost: 5, toStorage: true}
          ] 
        }
      ],
      showAddToIncomeModal: false
    };
  }
  
  // sellFromStorage = (index) => {
  //   const toolsStorage = [...this.state.toolsStorage];
  //   toolsStorage[index].quantity--
  //   this.setState({ toolsStorage: toolsStorage});
  // }

  //AddToExp Modal
  handleShowAddToIncomeModal = () => {
    this.setState({ showAddToIncomeModal: true});
  }

  handleCloseAddToIncomeModal = () => {
    this.setState({ showAddToIncomeModal: false});
  }

  render () {

    return (
      <ToolIncome 
      id={this.state.id}
      toolsIncome={this.state.toolsIncome} 
      click_add={this.handleShowAddToIncomeModal} 
      showAddToIncomeModal={this.state.showAddToIncomeModal}
      hideAddToIncomeModal={this.handleCloseAddToIncomeModal}
      />
    )
  }
}