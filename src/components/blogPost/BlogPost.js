import React, { Component } from 'react'
import Post from './Post'
import axios from 'axios'
import { Form, Button, Card, Row, Col } from 'react-bootstrap'
import API from '../service'

export default class BlogPost extends Component {
    constructor() {
        super()
        this.state = {
            post: [],
            formBlogPost: {

                id: 1,
                title: "",
                body: "",
                userId: 1
            }
        }
    }
    // get data dari Api
    getPostApi = () => {
        API.getNewsBlog().then(res => {
            this.setState({
                post: res
            })
        })
    }

    // get post dari api
    postApi = () => {
        axios.post('http://localhost:3001/posts', this.state.formBlogPost)
            .then((res) => {
                this.getPostApi()
            }).catch((err) => {
                console.log(err)
            })
    }
    // handle delete
    handleRemove = (data) => {
        axios.delete(`http://localhost:3001/posts/${data}`).then((res) => {
            this.getPostApi()
        })


    }
    // change
    handleChange = (e) => {
        let formNew = { ...this.state.formBlogPost };
        let timeStamp = new Date().getTime();
        formNew['id'] = timeStamp()
        formNew[e.target.name] = e.target.value
        this.setState({
            fromBlogPost: formNew

        })


    }

    // submit

    handleSubmit = () => {
        this.postApi()

    }
    // update

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            fromBlogPost: data
        })
        axios.put(`http://localhost:3001/posts/${data}`, this.state.formBlogPost).then((res) => {
            console.log(res)
            this.postApi()
        })
    }
    componentDidMount() {
        // get api ditaruh disini
        this.getPostApi()

    }
    render() {
        return (
            <div className="container" >
                <h1>blog spot</h1>
                <Row>
                    <Col md={6} xs={4}>
                        <Card>
                            <Form>
                                <Card.Header>Add</Card.Header>
                                <Card.Body>

                                    <div>
                                        <Form.Label>title</Form.Label>
                                        <Form.Control name="title" type="text" onChange={(e) => this.handleChange(e.target.value)} />
                                    </div>
                                    <div>
                                        <Form.Label>Desc</Form.Label>
                                        <Form.Control name="body" type="text" onChange={this.handleChange} />
                                    </div>
                                    <div>
                                        <Button variant="primary" onClick={this.handleSubmit}>Add</Button>
                                    </div>
                                </Card.Body>
                                {
                                    this.state.post.map((post) => (
                                        // key sebagai index dan data menganti post untuk dimasukan ke dalam parameter data di handle remove
                                        <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
                                    ))
                                }
                            </Form>

                        </Card>
                    </Col>
                </Row>


            </div>
        )
    }
}
