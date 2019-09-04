import React, { Component } from 'react';
import { Table, Modal, Button, Form, Col } from 'react-bootstrap';
import './Tools.css';

export class ToolExp extends Component {

  render () {
    const toolsExp = this.props.toolsExp.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{index+1}</td>
          <td>{item.name}</td>
          <td>{item.category}</td>
          <td>{item.color}</td>
          <td>{item.quantity}</td>
          <td>{item.cost}</td>
          <td>{isNaN(item.cost / item.quantity) ? ' ' : (Math.round(item.cost / item.quantity * 100) / 100)}</td>
          <td>{item.toStorage ? <Form.Check type="checkbox" defaultChecked /> : <Form.Check type="checkbox" />}</td>
        </tr>
      )
    });
    
    return (
      <div>
        <Button variant='info' className='mr-2'>Категорії</Button>
        <Button variant='success' className='mr-2' onClick={this.props.click_add}>+ Додати витрати</Button>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Витрата</th>
              <th>Категорія</th>
              <th>Колір</th>
              <th>Кількість</th>
              <th>Загальна вартість</th>
              <th>Собвівартість одиниці</th>
              <th>На склад</th>              
            </tr>
          </thead>
          <tbody>
            {toolsExp}
          </tbody>
        </Table>
        <Modal show={this.props.showAddToExpModal} onHide={this.props.hideAddToExpModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>Додати витрати</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group controlId="name">
                <Form.Label>Назва витрати</Form.Label>
                <Form.Control type="text" placeholder="Назва витрати" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="quantity">
                <Form.Label>Категорія</Form.Label>
                <Form.Control type="number" placeholder="Категорія" />
              </Form.Group>
              <Form.Group as={Col} controlId="cost">
                <Form.Label>Кількість</Form.Label>
                <Form.Control type="number" placeholder="Кількість" />
              </Form.Group>
              <Form.Group as={Col} controlId="sellPrice">
                <Form.Label>Загальна вартість</Form.Label>
                <Form.Control type="number" placeholder="Загальна вартість" />
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
            
            <Button variant="secondary" onClick={this.props.hideAddToExpModal}>
              Скасувати
            </Button>
            <Button variant="primary" onClick={this.props.hideAddToExpModal}>
              Додати
            </Button>
          </Form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}