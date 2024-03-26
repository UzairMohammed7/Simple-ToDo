// eslint-disable-next-line
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    completed: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    completed: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    completed: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    completed: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    completed: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    completed: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    completed: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    completed: false,
  },
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, newTodoTitle: '', newTodoCount: 1}

  onChangeInput = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  addTodoToList = () => {
    const {newTodoTitle, newTodoCount} = this.state
    const newTodos = Array.from({length: newTodoCount}, (_, i) => ({
      id: Date.now() + i,
      title: newTodoTitle,
      completed: false,
    }))
    this.setState(prevState => ({
      todoList: [...prevState.todoList, ...newTodos],
      newTodoTitle: '',
      newTodoCount: 1,
    }))
  }
  // const newTodos = {
  //   id: uuidv4(),
  //   title: newTodoTitle,
  //   completed: false,
  // }

  deleteTodoItem = id => {
    const {todoList} = this.state
    const updateTodoList = todoList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todoList: updateTodoList})
  }

  toggleComplete = id => {
    const {todoList} = this.state
    const updatedTodoList = todoList.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    this.setState({todoList: updatedTodoList})
  }

  render() {
    const {todoList, newTodoTitle, newTodoCount} = this.state
    return (
      <div className="container">
        <div className="todoCardContainer">
          <h1 className="heading">Simple Todos</h1>
          <div className="input-and-add-btn">
            <input
              type="text"
              name="newTodoTitle"
              className="input-text"
              placeholder="Add ToDo List"
              onChange={this.onChangeInput}
              value={newTodoTitle}
            />
            <input
              type="number"
              name="newTodoCount"
              className="input-text"
              value={newTodoCount}
              onChange={this.onChangeInput}
              placeholder="Enter number of todo"
            />
            <button
              type="button"
              className="add-btn"
              onClick={this.addTodoToList}
            >
              Add
            </button>
          </div>
          <ul className="todoListItems">
            {todoList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodoItem={this.deleteTodoItem}
                toggleComplete={this.toggleComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
