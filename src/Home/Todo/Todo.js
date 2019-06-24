import React, {Component} from 'react';
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(localStorage.getItem('todoapp')) || {
            isHidden: true,
            input: '',
            todos: [{
              value: '',
              id: this.guid()
            }]
        };
    }
    toggleHidden = () => {
        this.setState({
          isHidden: !this.state.isHidden
        })
    }
    addTodo = () => {
        const newTodo = {
          value: this.state.input,
          id: this.guid()
        };
        this.setState(state => ({
          todos: [ ...state.todos, newTodo],
          input: ''
        }));
    }
    handleInput = (evt) => {
        this.setState({
            input: evt.target.value
        });
    }
    removeTodo = (id) => {
        this.setState(state => {
          return{
            todos: state.todos.map(todo => {
              if(todo.id !== id){
                return todo;
              } else {
                return { ...todo, deleted: true }
              }
            })
          };
        });
        setTimeout(() => {
          this.setState(state => {
            return{
              todos: state.todos.filter(t => t.id !== id)
            }});
        }, 1000);
    }
    guid(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c === 'x' ? r : (`r&0x3|0x8`);
          return v.toString(16);
        });
    }
    componentDidMount(){
        this.todoInput.focus();
    }
    componentDidUpdate(){
        localStorage.setItem('todoapp', JSON.stringify(this.state));
    }
    
    render() {
        return (
            <div>
                <div className="reminders">
                    <p>reminders</p>
                    <div className="reminder--btns" onClick={this.toggleHidden}>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                { 
                    this.state.todos.map(t => 
                    <DisplayItem 
                        key={t.id} {...t}
                        onClick={()=>this.removeTodo(t.id)}
                    />
                    )
                }
                <div className={this.state.isHidden ? 'hidden' : null}>
                    <form id="formToAddItemsID" className="addItems">
                        <input
                            name="item"
                            placeholder="What do you need to do"
                            value={this.state.input} 
                            onChange={this.handleInput} 
                            onKeyDown={this.handleInput}  
                            ref={(input) => { this.todoInput = input; }}
                        />
                        <br></br>
                        <button onClick={this.addTodo}>Add Item</button>
                    </form>
                </div>
            </div>
        )
    }
}

const DisplayItem = ({value, onClick, deleted}) => (
    <div className="reminders--list inline">
        <ul id="listOfItemsID" className="things">
            <li>
                <label className="todo">
                    <span className={`todo ${deleted ? 'deleted' : ''}`}>
                    <input className="todo-checkbox" type="checkbox" onClick={onClick} />
                    <span className="todo-switch"></span>
                        <label className="todo-label">
                            {value}
                        </label>
                    </span>
                </label>
            </li>
        </ul>
    </div>
);

export default Todo;