import { body, param } from 'express-validator'

export const createTodoValidationRules = [
  body('name').notEmpty().withMessage('Name is required'),
]

export const updateTodoValidationRules = [
  param('id').notEmpty().withMessage('Id param is required'),
  body('name').notEmpty().withMessage('Name is required'),
  body('completed').notEmpty().withMessage('Completed boolean is required'),
]
