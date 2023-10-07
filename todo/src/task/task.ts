export class TodoTask {
    id = 0
    name = ''
    completed = false

    toggle() {
        this.completed = !this.completed
    }
}