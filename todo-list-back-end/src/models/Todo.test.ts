import {describe, expect, test} from '@jest/globals';
import {Todo} from "./Todo";
import {Task} from "./Task";

describe('Todo Module', () => {
    test('Create Todo', () => {
        Todo.getTodo('testTodo')
    })
    test('Add Task', () => {
        const todo = Todo.getTodo('testTodo')
        todo.addTask('Something to do')
    })
    test('Get task', () => {
        const todo = Todo.getTodo('testTodo')
        const task = todo.getTask('Something to do')
        expect(task.done).toBeFalsy()
        expect(task.name).toBe('Something to do')
    })
    test('Add another task', () => {
        const todo = Todo.getTodo('testTodo')
        todo.addTask('Other thing to do')
    })
    test('Finish a task', () => {
        const todo = Todo.getTodo('testTodo')
        todo.finishTask('Something to do')
        const task = todo.getTask('Something to do')
        expect(task.done).toBeTruthy()
    })
    test('List all task', () => {
        const todo = Todo.getTodo('testTodo')
        const allTasks: Task[] = todo.getTasks()
        expect(allTasks.length).toBe(2)
        expect(allTasks[0].name).toBe('Something to do')
        expect(allTasks[0].done).toBeTruthy()
        expect(allTasks[1].name).toBe('Other thing to do')
        expect(allTasks[1].done).toBeFalsy()
    })
    test('Delete a task', () => {
        const todo = Todo.getTodo('testTodo')
        const task = todo.getTask('Something to do')
        todo.removeTask('Something to do')
        const tasks = todo.getTasks()
        expect(tasks.length).toBe(1)
    })
})
