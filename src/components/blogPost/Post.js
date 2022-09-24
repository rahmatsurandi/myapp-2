import React from 'react'
import { Image, Button, Card } from 'react-bootstrap'

function Post(props) {


    return (
        <div>
            <Card className="py-2">
                <Card.Header className="text-center">test app api</Card.Header>
                <Card.Body>
                    <div className="text-center">
                        <Image src="https://placeimg.com/200/150/tech" alt="" />
                    </div>
                </Card.Body>
                <Card.Text className="text-center">
                    <div>
                        <p>{props.data.title}</p>
                        <p>{props.data.body}</p>
                    </div>
                </Card.Text>
                <Card.Footer className="text-center">
                    <Button onClick={() => props.remove(props.data.id)}>Remove</Button>
                    <Button onClick={() => props.update(props.data)}>update</Button>

                </Card.Footer>
            </Card>


        </div>
    )
}

export default Post