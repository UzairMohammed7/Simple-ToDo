import './index.css'

const TodoItem = props => {
  const {deleteTodoItem, todoDetails} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="todoList">
      <p className="title">{title}</p>
      <button className="btn" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
