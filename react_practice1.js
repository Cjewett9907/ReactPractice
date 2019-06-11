import React from 'react'
import ReactDOM from 'react'
// import other necessary resources

class WelcomeUser extends React.Component {
    handleNameChange = (e) => {
      this.props.updateUserName(e.target.value);
    };
    
    render() {
      return (
        <input type='text' placeholder='Enter your name' 
               value={this.props.name}
               onChange={this.handleNameChange} />
      );
    }
  }



class helloWorld extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            greet: "Hello World",
            todoList: ["first", "second", "third"]
        }
    }

    updateUserName = (n) => {
        this.setState({ name: n });
      };

    clearText = () => {
        this.setState({ name: "" })
      };


    render(){
        return(
            <div className="hello-world-div">
                <h1>{this.state.greet}</h1>
                <WelcomeUser name={this.state.name}
                     updateUserName={this.updateUserName} />
                    <button type='button' onClick={this.clearText}>Clear</button>
                <br />
                {this.state.todoList.map (item => (
                    <h3>item</h3>
                ))}   
            </div>
        );
    }
}

ReactDOM.render(<helloWorld/>, document.getElementById('app'));