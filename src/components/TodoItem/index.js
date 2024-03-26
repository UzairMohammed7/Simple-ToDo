import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {isEdited: false, titleUpdated: ''}

  onClickEdit = () => {
    const {todoDetails} = this.props
    this.setState({isEdited: true, titleUpdated: todoDetails.title})
  }

  onClickSave = () => {
    this.setState({isEdited: false})
  }

  changeTitle = event => {
    this.setState({titleUpdated: event.target.value})
  }

  render() {
    const {todoDetails, deleteTodoItem, toggleComplete} = this.props
    const {isEdited, titleUpdated} = this.state

    return (
      <li className={todoDetails.completed ? 'todoList completed' : 'todoList'}>
        {isEdited ? (
          <>
            <input
              type="text"
              value={titleUpdated}
              onChange={this.changeTitle}
              className="input-text"
            />
            <button
              onClick={this.onClickSave}
              type="button"
              className="save-btn"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <div className="check-title">
              <input
                type="checkbox"
                checked={todoDetails.completed}
                onChange={() => toggleComplete(todoDetails.id)}
                className="checkbox"
              />
              <p className="title">{todoDetails.title}</p>
            </div>
            <div>
              <button
                onClick={this.onClickEdit}
                type="button"
                className="edit-btn"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodoItem(todoDetails.id)}
                type="button"
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </li>
    )
  }
}

export default TodoItem
