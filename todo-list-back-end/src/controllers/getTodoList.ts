import {Express, response} from "express";
import {getApp} from "../app-factory";
import {Todo} from "../models/Todo";

const app: Express = getApp()

app.get('/:todoName', (req, res) => {
    const todoName = req.params.todoName
    const todo: Todo = Todo.getTodo(todoName)
    res.send(todo.getTasks())
})
