"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const todo_1 = require("../validation/todo");
const todo_2 = require("../controllers/todo");
const validator_1 = require("../middleware/validator");
router.get('/', todo_2.getTodos);
router.get('/:id', todo_2.getTodo);
router.post('/', todo_1.createTodoValidationRules, validator_1.validate, todo_2.createTodo);
router.patch('/:id', todo_1.updateTodoValidationRules, validator_1.validate, todo_2.updateTodo);
router.delete('/:id', todo_2.deleteTodo);
exports.default = router;
