import express from 'express'
const router = express.Router()

import {
  createTodoValidationRules,
  updateTodoValidationRules,
} from '../validation/todo'
import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo,
} from '../controllers/todo'
import { validate } from '../middleware/validator'

router.get('/', getTodos)
router.get('/:id', getTodo)
router.post('/', createTodoValidationRules, validate, createTodo)
router.patch('/:id', updateTodoValidationRules, validate, updateTodo)
router.delete('/:id', deleteTodo)

export default router
