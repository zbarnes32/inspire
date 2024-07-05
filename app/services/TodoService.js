import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js"

class TodoService {
    async updateTodo(todoId) {
        const todos = AppState.todos
        const foundTodo = todos.find((todo) => todo.id == todoId)
        if (foundTodo){
            foundTodo.completed = !foundTodo.completed
            const request = {
                id: foundTodo.id,
                description: foundTodo.description,
                completed: foundTodo.completed
            }
            const response = await api.put(`api/todos/${todoId}`, request)
            console.log(response.data)
        }
    }
    async getMyTodos() {
       const response = await api.get('api/todos') 
       console.log('Did I get the todos?', response.data)
       const todoList = response.data.map((todo) => new Todo(todo))
       AppState.todos = todoList
    }

    async saveTodos(){
        // @ts-ignore
        const todoDetail = document.getElementById("todo-details").value
        // console.log(todoDetail)
        const newRequest = {
            completed: false,
            description: todoDetail
        }
        const response = await api.post('api/todos', newRequest)
        // console.log('did it work?', response.data)
        const newTodo = new Todo(response.data)
        AppState.todos.push(newTodo)
    }

    async deleteTodo(todoId){
        const todos = AppState.todos
        const foundIndex = todos.findIndex((todo) => todo.id == todoId)
        if (foundIndex >= 0){
            console.log('deleting')
            const response = await api.delete(`api/todos/${todoId}`)
            AppState.todos.splice(foundIndex, 1)
        }
    }

}

export const todoService = new TodoService()


// completed: Boolean, required
// description: String, required
// creatorId: SchemaObjectId, required
// *creator: Object (Virtual Added by Database)
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)