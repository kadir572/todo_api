import mongoose, { Schema, Document } from 'mongoose'

interface ITodo extends Document {
  name: string
  completed: boolean
}

const todoSchema = new Schema<ITodo>({
  name: { type: String, required: true },
  completed: { type: Boolean, default: false },
})

const Todo = mongoose.model<ITodo>('Todo', todoSchema)

export default Todo
