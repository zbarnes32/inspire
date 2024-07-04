export class Todo {
    constructor(data){
        this.completed = data.completed || false
        this.description = data.description
        this.creatorId = data.creatorId
    }

    get todoTemplate(){
        return  `
        <input type="checkbox" class="checkbox">
        <input type="text" placeholder="Add To Do Here...">
        <button class=" btn btn-outline-danger mdi mdi-delete"></button>

        `
    }
}