import React, { Component } from 'react'
import { Card, Image, Col, Row, Button, Badge } from 'react-bootstrap'
import { faMinus, faPlus, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GlobalConsumer } from '../../context/Context.js'

class CardComponent extends Component {

    render() {
        console.log(this);

        return (

            < Col md={6} xxs={12} className="mb-2" >
                <Card>
                    <Card.Header>
                        <h5>{this.props.name} <span className="px-4">
                            <FontAwesomeIcon icon={faBasketShopping} size="2x" />
                        </span><Badge bg="primary">{this.props.state.totalOrder}</Badge></h5>
                    </Card.Header>
                    <Card.Body className="text-center">
                        <Image className="border rounded-2 shadow-lg" src={this.props.img} width="300" height="200" alt="" />
                    </Card.Body>
                    <Card.Footer>
                        <Row className="">
                            <Col md={1} xs={3}>
                                <Button onClick={() => this.props.dispatch({ type: "MINUS" })}>
                                    <FontAwesomeIcon icon={faMinus} size="1x" />
                                </Button>
                            </Col>
                            <Col md={2} className="text-center">
                                <input className="w-50" type="text" value={this.props.state.totalOrder} />
                            </Col>
                            <Col md={4}>
                                <Button onClick={() => this.props.dispatch({ type: "PLUS" })}>
                                    <FontAwesomeIcon icon={faPlus} size="1x" />
                                </Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Col >




        )
    }
}

export default GlobalConsumer(CardComponent);