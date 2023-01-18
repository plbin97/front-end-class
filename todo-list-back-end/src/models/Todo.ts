import {Task} from "./Task";
import e from "express";

class Todo {
    private static todos: Map<string, Todo> | null = null

    private tasks: Task[] = []


    public static getTodo(todoName: string): Todo {
        if (!this.todos) {
            this.todos = new Map<string, Todo>()
        }
        let todo: Todo | undefined = this.todos.get(todoName)
        if (!todo) {
            todo = new Todo()
            this.todos.set(todoName, todo)
        }
        return todo
    }

    public getTasks() {
        return this.tasks
    }

    public addTask(taskName: string) {
        for (const task of this.tasks) {
            if (task.name === taskName) {
                throw new Error('Task Already Created')
            }
        }
        this.tasks.push({
            name: taskName,
            done: false
        })
    }

    public getTask(taskName: string): Task {
        for (const task of this.tasks) {
            if (task.name === taskName) {
                return task
            }
        }
        throw new Error('Task not found')
    }

    public finishTask(taskName: string) {
        const task = this.getTask(taskName)
        if (task) {
            task.done = true
        }
    }

    public removeTask(taskName: string) {
        for (let i = 0; i < this.tasks.length; i ++) {
            if (this.tasks[i].name === taskName) {
                this.tasks.splice(i, 1)
            }
        }
    }

}

export {Todo}