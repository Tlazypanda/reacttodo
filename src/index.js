import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tasks:[],
            text:'',
        };
            this.handlesubmit=this.handlesubmit.bind(this);
            this.handlechange=this.handlechange.bind(this);
    }

    
    render() {
        return(
        <div id="example">
        <h1>TODO LIST</h1>
        <Todolist items={this.state.items}/>
        <form onSubmit={this.handlesubmit}>
            <input onChange={this.handlechange} value={this.state.text} />
                <button>Add {this.state.tasks.length+1}</button>
        </form>
        </div>
        
        );
    }
        
    handlechange(e){
        this.setState({text:e.target.value});
        
    }
        
    handlesubmit(e){
        e.preventDefault();
        if(!this.state.text.length)
            {return;}
        else{
            const newtask={
                text:this.state.text,
                id:Date.now(),
            };
            
            this.setState(prevState =>({
                tasks:prevState.tasks.concat(newtask),
                text:''
            }));
        }
    }
    }
    
    class Todolist extends React.Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<Todo />,document.getElementById('root'));

export default Todo;

                
         