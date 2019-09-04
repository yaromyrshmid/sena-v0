import React, { Component } from 'react';
import { Table, Modal, Button, Form, Col } from 'react-bootstrap';
import './Tools.css';

export class ToolStorage extends Component {

  render () {
    const toolsStorage = this.props.toolsStorage.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{index+1}</td>
          <td>{item.name}</td>
          <td>{item.category}</td>
          <td>{item.color}</td>
          <td>{item.quantity}</td>
          <td>{item.cost}</td>
          <td>{item.sellPrice}</td>
          <td onClick={()=>this.props.click_sell(index)}>Продати</td>
          <td><Form.Check type="checkbox" /></td>
        </tr>
      )
    });
    
    return (
      <div>
        <Button variant='info' className='mr-2'>Категорії</Button>
        <Button variant='info' className='mr-2'>Комплекти</Button>
        <Button variant='success' className='mr-2' onClick={this.props.click_add}>+ Додати на склад </Button>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Товар</th>
              <th>Категорія</th>
              <th>Колір</th>
              <th>Кількість</th>
              <th>Собівартість</th>
              <th>Ціна продажу</th>
              <th>Продати</th>
              <th>В магазині</th>
            </tr>
          </thead>
          <tbody>
            {toolsStorage}
          </tbody>
        </Table>
        <Modal show={this.props.showAddToStorageModal} onHide={this.props.hideAddToStorageModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>Додати на склад</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group controlId="name">
                <Form.Label>Назва товару</Form.Label>
                <Form.Control type="text" placeholder="Назва товару" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="quantity">
                <Form.Label>Кількість</Form.Label>
                <Form.Control type="number" placeholder="Кількість" />
              </Form.Group>
              <Form.Group as={Col} controlId="costs">
                <Form.Label>Вартість</Form.Label>
                <Form.Control type="number" placeholder="Вартість" />
              </Form.Group>
              <Form.Group as={Col} controlId="cost">
                <Form.Label>Собівартість одиниці</Form.Label>
                <Form.Control type="number" placeholder="Собівартість одиниці" />
              </Form.Group>
              <Form.Group as={Col} controlId="sellPrice">
                <Form.Label>Планова ціна продажу</Form.Label>
                <Form.Control type="number" placeholder="Планова ціна продажу" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Label>Характеристики</Form.Label>
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
            
            <Button variant="secondary" onClick={this.props.hideAddToStorageModal}>
              Скасувати
            </Button>
            <Button variant="primary" onClick={this.props.hideAddToStorageModal}>
              Додати
            </Button>
          </Form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}