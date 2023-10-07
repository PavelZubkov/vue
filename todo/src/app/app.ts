import { TodoTask } from "@/task/task";
import { reactive } from "vue";

export class TodoApp {
    tasks: TodoTask[] = []
    idCounter = 0

    taskAdd(name: string) {
        const obj = reactive(new TodoTask)
        obj.id = this.idCounter++
        obj.name = name
        this.tasks.push(obj)
    }

    tasksFilter(filter: (task: TodoTask) => boolean) {
        return this.tasks.filter(filter)
    }
}
