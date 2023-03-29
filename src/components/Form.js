import React from 'react'

function Form() {
    return (
      <div class="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Incompleted</option>
        </select>
      </div>
  )
}
// function completedList(id) {
//   return(
//     setTodoList(
//       todoList.map((task) => {
//         if (task.id === id) {
//           return { ...task, completed: !false };
//         } else {
//           return task;
//         }
//       })
//     )
//   )
// };

export default Form
