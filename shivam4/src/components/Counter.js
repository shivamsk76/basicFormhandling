import React, { Component } from 'react'

class Counter extends Component {
    
constructor(props) {
    super(props)

    this.state = {
         message: "hello"
    }
    this.clickHandler = this.clickHandler.bind(this)
} 
//   clickHandler() {
//       this.setState({
//           message: 'goodbye'
//       })
//   }

clickHandler = () => {
    this.setState({
        message: 'Goodbye'
    })
}
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick= {this.clickHandler}>Click </button>
            </div>
        )
    }
}

export default Counter
