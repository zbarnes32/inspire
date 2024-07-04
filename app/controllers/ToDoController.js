import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

export class ToDoController {
    constructor() {
        // ✅ console.log('To Do Controller, reporting for duty 👮‍♀️🎮')

    }

drawTodos(){
    let todos = AppState.todos
    let innerHTMLString = ''
    todos.forEach((todo) => {innerHTMLString += todo.todoTemplate})
    setHTML('todo-list', innerHTMLString)
}


}