import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js"

class TodoService {
    async getMyTodos() {
       const response = await api.get('api/todos') 
       console.log('Did I get the todos?', response.data)
       const newTodo = response.data.map((todo) => new Todo(todo))
       AppState.todos = newTodo
    }

    async saveTodos(){
        const response = await api.post('api/todos')
        console.log('did it work?', response.data)
        const newTodo = new Todo(response.data)
        AppState.todos.push(newTodo)
    }

}

export const todoService = new TodoService()