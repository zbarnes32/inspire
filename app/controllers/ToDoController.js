import { AppState } from "../AppState.js";
import { todoService } from "../services/TodoService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class ToDoController {
    constructor() {
        // ✅ console.log('To Do Controller, reporting for duty 👮‍♀️🎮')
        AppState.on('account', this.getMyTodos)
        AppState.on('todos', this.drawTodos)
    }

    //TODO Finish later
drawTodos(){
    let todos = AppState.todos
    let innerHTMLString = ''
    todos.forEach((todo) => {innerHTMLString += todo.todoTemplate})
    setHTML('todo-list', innerHTMLString)
}

async getMyTodos(){
    try {
        await todoService.getMyTodos()
    } catch (error) {
        Pop.error(error)
        console.error('Unable to get my todos', error)
    }
}

async saveTodos(){
    console.log('Will save todos')
    try {
        await todoService.saveTodos()
    } catch (error) {
        Pop.error(error)
        console.error('Unable to save todo', error)
    }
}


}