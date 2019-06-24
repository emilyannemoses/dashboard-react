import React, {Component} from 'react';
import './Todo.css'

class Todo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isHidden: true,
        itemInput: '',
        items: []
      };
    }
    toggleHidden() {
        this.setState({
          isHidden: !this.state.isHidden
        })
        console.log(this.state.isHidden)
    }
    inputUpdate = (event) => {
        this.setState({
            itemInput: event.target.value
        })
    }
    formSubmit = (event) => {
        event.preventDefault()
        console.log("Array: ", this.state.items)
        this.setState({
          items: [...this.state.items, this.state.itemInput],
          itemInput: ''
        })
    }
    render() {
        return (
            <div>
                <div className="reminders">
                    <p>reminders</p>
                    <div className="reminder--btns" onClick={this.toggleHidden.bind(this)}>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                <div className="reminders--list">
                    <ul id="listOfItemsID" className="things">
                        {this.state.items.map((item, index) => {
                            return (
                                <li key={index}>
                                    <label className="todo">
                                        <input className="todo-checkbox" type="checkbox" />
                                        <div className="todo-switch"></div>
                                        <label className="todo-label">{this.state.items[index]}</label><span>&nbsp;&nbsp;x</span>
                                    </label>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={this.state.isHidden ? 'hidden' : null}>
                    <form onSubmit={this.formSubmit} id="formToAddItemsID" className="addItems">
                        <input value={this.state.itemInput} onChange={this.inputUpdate} name="item" placeholder="What do you need to do" autoFocus required />
                        <br></br>
                        <input type="submit" value="Add Item" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Todo;