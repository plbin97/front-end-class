import express, {Express} from "express";
import {getApp} from "../app-factory";
import {Todo} from "../models/Todo";

const app: Express = getApp()

app.use(express.json())
app.post('/:todoName', (req, res) => {
    const todoName = req.params.todoName
    const taskName = req.body.taskName
    if (!taskName) {
        res.status(400).send('No Task Name')
        return
    }
    const todo: Todo = Todo.getTodo(todoName)
    try {
        todo.addTask(taskName)
    } catch (e) {
        const error = e as Error
        res.status(400).send(error.message)
        return
    }
    res.send('done')
})