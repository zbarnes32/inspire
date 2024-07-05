export class Todo {
    constructor(data){
        this.completed = data.completed || false
        this.description = data.description
        this.creatorId = data.creatorId
        this.id = data.id
    }

    get todoTemplate(){
        return  `
        <div class="d-flex justify-content-between">
        <input onclick="app.ToDoController.updateTodo('${this.id}')" type="checkbox" class="checkbox" ${this.completed ? 'checked' : ''}>
        <p>${this.description}</p>
        <button onclick="app.ToDoController.deleteTodo('${this.id}')" class="btn btn-outline-danger mdi mdi-delete"></button>
        </div>
        `
    }
}