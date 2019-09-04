import React, { Component } from 'react';
import { Table, Modal, Button, Form, Col } from 'react-bootstrap';
import './Tools.css';

export class ToolIncome extends Component {

  render () {
    const toolsIncome = this.props.toolsIncome.map((item, index) => {
      let complectPrice = 0;
      const complect = item.items.map((el, elindex) => {
        complectPrice = el.quantity * el.cost + complectPrice;
        return (
          <tr key={el.id + elindex}>
            <td>{index+1}, {elindex}</td>
            <td>{el.name}</td>
            <td></td>
            <td>{el.category}</td>
            <td>{el.color}</td>
            <td>{el.quantity}</td>
            <td>{el.cost}</td>
          </tr>
        )
      })
      return (
        <tbody>
          <tr key={item.id}>
            <td>{index+1}</td>
            <td>{item.items[0].name}</td>
            <td>{item.sellPrice}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{complectPrice}</td>
          </tr>
          {complect}
        </tbody>
      )
    });
    
    return (
      <div>
        <Button variant='success' className='mr-2' onClick={this.props.click_add}>+ Продати</Button>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Продано</th>
              <th>Ціна продажу</th>
              <th>Категорія</th>
              <th>Колір</th>
              <th>Кількість</th>
              <th>Собвівартість одиниці</th>              
            </tr>
          </thead>
          {toolsIncome}
        </Table>
        <Modal show={this.props.showAddToIncomeModal} onHide={this.props.hideAddToIncomeModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>Продати</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group controlId="name">
                <Form.Label>Назва комплекту</Form.Label>
                <Form.Control type="text" placeholder="Назва комплекту" />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="sellPrice">
                <Form.Label>Ціна продажу</Form.Label>
                <Form.Control type="number" placeholder="Ціна продажу" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Label>Товар 1</Form.Label>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="sellPrice">
                <Form.Label>Назва товару</Form.Label>
                <Form.Control type="number" placeholder="Назва товару" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="quantity">
                <Form.Label>Категорія</Form.Label>
                <Form.Control type="number" placeholder="Категорія" />
              </Form.Group>
              <Form.Group as={Col} controlId="cost">
                <Form.Label>Кількість</Form.Label>
                <Form.Control type="number" placeholder="Кількість" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="color">
                <Form.Label>Колір</Form.Label>
                <Form.Control as="select" placeholder="Колір" >
                  <option>червоний</option>
                  <option>чорний</option>
                  <option>зелений</option>
                  <option>синій</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Button variant='success' className='mr-2'>+ Товар</Button>
            </Form.Row>
            <Button variant="secondary" onClick={this.props.hideAddToIncomeModal}>
              Скасувати
            </Button>
            <Button variant="primary" onClick={this.props.hideAddToIncomeModal}>
              Додати
            </Button>
          </Form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}