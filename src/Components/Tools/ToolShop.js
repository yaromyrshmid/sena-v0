import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Image} from 'react-bootstrap';
import './Tools.css';
import baner_shop from '../../images/ads/baner_shop.png'

export class ToolShop extends Component {

  render () {
    const toolsShop = this.props.toolsShop.map((item, index) => {
      let card = 0;
      (item.id === 'ads') ? (card =
          <Image src={baner_shop} />
         ) : (
          card =
            <Card>
              <Card.Img variant="top" src={item.picture} />
              <Card.Text className="pricetag">{item.sellPrice} грн.</Card.Text>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Title className="itemcolor"> Колір: {item.color}</Card.Title>
                <Card.Text className="descrip">{item.descrip}</Card.Text>
                <Button variant="success">Купити</Button>
              </Card.Body>
            </Card>
         );
      return (
        <Col xs={4} key={item.id}>
        {card}
      </Col>
      )
    });

    return (
      <Container>
        <Row>
        {toolsShop}
        </Row>
      </Container>
    )
  }
}