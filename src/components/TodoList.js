import React from 'react'

const TodoList = ({todos,handleDelete,handleEdit}) => {
  return (
    <ul className="alltodos">
          {todos.map((t) => (
            <li className="singletodo">
              <span className="todotext" key={t.id}>
                {t.todo}
              </span>
              <button onClick={() => handleEdit(t.id)}>Edit</button>
              <button onClick={() => handleDelete(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
  )
}

export default TodoList;