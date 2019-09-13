import { useState } from "react";

// NOT IN USE
export default class TodoStorage {
    constructor() {
        console.log('constructor TodoStorage');
        
        const [todos, setTodos] = useState([
            // {
            //   text: "Learn about React",
            //   isCompleted: false,
            //   id: generateUid(),
            // },
            // {
            //   text: "Meet friend for lunch",
            //   isCompleted: false,
            //   id: generateUid(),
            // },
            // {
            //   text: "Build really cool todo app",
            //   isCompleted: false,
            //   id: generateUid(),
            // }
          ]);
        this.todos = todos;
        this.setTodos = setTodos;
    }

    addTodo(text) {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };
    
    completeTodo = id => {
        const index = todos.findIndex( t => t.id === id);
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
      };
    
    removeTodo = id => {
        const index = todos.findIndex( t => t.id === id);
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };
}
  