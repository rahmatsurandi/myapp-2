import React from 'react'
import { Row } from 'react-bootstrap'
import CardComponent from '../card/CardComponent'

function Card1(props) {
    return (
        <div className="container">
            <Row>
                <CardComponent name={"Adidas shoes"} img={'../image/adidas.jpg'} />
            </Row>
        </div>
    )
}

export default Card1