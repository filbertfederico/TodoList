export const Task = (props) => {
    return (
      <div className="task" style={{ backgroundColor: props.completed ? "green" : "white" }}>
        <h1>{props.taskName}</h1>
        <button onClick={() => props.completeTask(props.id)}> ✓ </button>
        <button onClick={() => props.deleteTask(props.id)}> X </button>
      </div>
    );
};

// export const completeHandler = () => {
//   setTodos(todoList.map(item=>{
//     if(item.id == todo.id){
//       return { 
//         ...item,completed: !item.completed
//       };
//     }
//     return item;
//   }));
// }


