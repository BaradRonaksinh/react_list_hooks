import React,{ Component} from "react"

class Classcomponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name,
            count : 0
        }
        this.addCount = () => {
            this.setState({
                count:this.state.count+1
            })
        }
    }
    render(){
        return(
            <>
                <div>
                    <h3>My Class Component</h3>
                    <h4>Name is :{this.state.name}</h4>
                    <button onClick={() => this.setState({name:"ronak"})}>change</button>
                    <h4>Count is : {this.state.count}</h4>
                    <button onClick={this.addCount}>Increment</button>
                </div>
            </>
        )
    }
}

export default Classcomponent