import React from 'react'
import { Card, Image, Col, Row } from 'react-bootstrap'

function home() {
    return (
        <div className='container py-5'>
            <Row className="py-5">
                <Col md={6} className="mb-5 mt-2">
                    <Card >
                        <Card.Header className="text-center">ganti lcd</Card.Header>
                        <Card.Body className="text-center">
                            <Image src="../image/hape.jpg" width="400" height="200" />
                        </Card.Body>
                        <Card.Footer className='text-center'>Rp.100000</Card.Footer>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card >
                        <Card.Header className="text-center">ganti lcd</Card.Header>
                        <Card.Body className="text-center">
                            <Image src="../image/hape.jpg" width="400" height="200" />
                        </Card.Body>
                        <Card.Footer className='text-center'>Rp.100000</Card.Footer>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card >
                        <Card.Header className="text-center">ganti lcd</Card.Header>
                        <Card.Body className="text-center">
                            <Image src="../image/hape.jpg" width="400" height="200" />
                        </Card.Body>
                        <Card.Footer className='text-center'>Rp.100000</Card.Footer>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card >
                        <Card.Header className="text-center">ganti lcd</Card.Header>
                        <Card.Body className="text-center">
                            <Image src="../image/hape.jpg" width="400" height="200" />
                        </Card.Body>
                        <Card.Footer className='text-center'>Rp.100000</Card.Footer>
                    </Card>
                </Col>
            </Row>


        </div>
    )
}

export default home