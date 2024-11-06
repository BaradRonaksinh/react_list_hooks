import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor() {
        super()
        this.state = {
            name : "jagga"
        }
        console.log("constructor called...");
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({name:"chak de.."})
        }, 3000)
        console.log("component did mount called...");
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps called.."+ state.name);
        return null
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate fun called...");
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("previos value is "+prevState.name);
        return prevState
    }
    componentDidUpdate(){
        console.log("Finally value are updated");
    }
    render() {
        console.log("render called...");
        // console.log("******************************************");
        return (
            <>
                <div>
                    <h3>Lifecylce Example</h3>
                    <h4>Name is {this.state.name}</h4>
                </div>
            </>
        )
    }
}

export default Lifecycle