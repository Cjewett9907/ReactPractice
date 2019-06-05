import React from 'react'
import ReactDOM from 'react'
// import other necessary resources


class helloWorld extends React.Component {
    constructor(props){
        super(props)
        state = {
            name: "",
            greet: "Hello World",
            todoList: ["first", "second", "third"]
        }


    }


    render(){
        return(
            <div className="hello-world-div">
                <h1>{this.state.greet}</h1>


                {this.state.todoList.map (item => (
                    <h3>item</h3>
                ))}

            
            </div>
        );
    }
}

ReactDOM.render(<helloWorld/>, document.getElementById('app'));