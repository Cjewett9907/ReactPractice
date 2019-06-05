import React from 'react'
import ReactDOM from 'react'
// import other necessary resources


class helloWorld extends React.Component {
    constructor(props){
        super(props)
        state = {
            name: "",
            greet: "Hello World"
        }


    }


    render(){
        return(
            <div className="hello-world-div">
                <h1>{this.state.greet}</h1>

            
            </div>
        );
    }
}

ReactDOM.render(<helloWorld/>, document.getElementById('app'));