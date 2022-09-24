import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { GlobalConsumer } from '../../context/Context.js'
class LifeCycleComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        console.log("constructor")
    }
    static getDrivedStateFromProps(props, state) {
        console.log("getDrivedStateFromProps")
        return null
    }
    componentDidMount() {
        console.log('component didmount')
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 3000)


    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("component shouldcomponentDidupdate")
        return true

    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("component getSanpshotBeforeUpdate")
        return null
    }
    componentDidUpdate(prevProps, prevState, snapShot) {

        console.log("componentdidUpdate")

    }
    componentWillUnmount() {
        console.log("componentWillunmount")
    }
    handleclick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        console.log(this)
        return (
            <div className="container">
                <Button onClick={this.handleclick}>component button {this.state.count}</Button>
                <h1>{this.props.state.totalOrder}</h1>
            </div>

        )
    }
}

export default GlobalConsumer(LifeCycleComp)