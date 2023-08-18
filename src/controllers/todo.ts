import { Request, Response } from 'express'
import Todo from '../models/Todo'

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find()
    return res.status(200).json(todos)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos', error })
  }
}

export const getTodo = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const todo = await Todo.findById(id)
    if (!todo) return res.status(404).json({ message: 'Todo not found' })

    return res.status(200).json(todo)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todo', error })
  }
}

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { name } = req.body
    const todo = new Todo({ name })
    await todo.save()
    res.status(201).json({ todo })
  } catch (error) {
    res.status(500).json({ message: 'Error creating todo', error })
  }
}

export const updateTodo = async (req: Request, res: Response) => {
  const { name, completed } = req.body
  const { id } = req.params
  try {
    const todo = await Todo.findById(id)
    if (!todo) return res.status(404).json({ message: 'Todo not found' })
    todo.name = name
    todo.completed = completed

    const updatedTodo = await todo.save()
    return res.status(200).json({ updatedTodo })
  } catch (error) {
    res.status(500).json({ message: 'Error creating todo', error })
  }
}

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const todo = await Todo.findByIdAndDelete(id)
    if (!todo) return res.status(404).json({ message: 'Todo not found' })
    return res.status(200).json(todo)
  } catch (error) {
    res.status(500).json({ message: 'Error deleting todo', error })
  }
}
