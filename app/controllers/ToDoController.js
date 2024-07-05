import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
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
    let remainingCount = 0
    todos.forEach((todo) => {
        innerHTMLString += todo.todoTemplate
        if (!todo.completed){
            remainingCount++
        }
    })
    setHTML('todo-list', innerHTMLString)
    setHTML('remaining-todos-count', remainingCount)
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

async updateTodo(todoId){
    console.log('Updating the to-do')
    try {
        await todoService.updateTodo(todoId)
        this.drawTodos()
    } catch (error){
        Pop.error(error)
        console.error('Unable to update todo', error)
    }
}

async deleteTodo(todoId){
    try {
        const confirmedDelete = window.confirm('Are you sure you want to delete?')
        if (!confirmedDelete){
          return  
        }
        await todoService.deleteTodo(todoId)
    } catch (error) {
        Pop.error(error)
        console.error('Unable to delete todo', error)
    }
}


}