import React from 'react'
import TodoItem from "./TodoItem";

const ItemList = (props) => {
    const {todos,removeTask,toggleComplete,rename} = props;
    return (
        <ul>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem
                            taskId={todo.id}
                            key={todo.id}
                            name={todo.name}
                            isCompleted={todo.isCompleted}
                            removeTask={removeTask}
                            toggleComplete={toggleComplete}
                            rename={rename}/>
                    )
                })
            }
        </ul>
    );
}
export default ItemList
