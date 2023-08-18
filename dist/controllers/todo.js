"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodo = exports.getTodos = void 0;
const Todo_1 = __importDefault(require("../models/Todo"));
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield Todo_1.default.find();
        return res.status(200).json(todos);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching todos', error });
    }
});
exports.getTodos = getTodos;
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const todo = yield Todo_1.default.findById(id);
        if (!todo)
            return res.status(404).json({ message: 'Todo not found' });
        return res.status(200).json(todo);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching todo', error });
    }
});
exports.getTodo = getTodo;
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const todo = new Todo_1.default({ name });
        yield todo.save();
        res.status(201).json({ todo });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating todo', error });
    }
});
exports.createTodo = createTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, completed } = req.body;
    const { id } = req.params;
    try {
        const todo = yield Todo_1.default.findById(id);
        if (!todo)
            return res.status(404).json({ message: 'Todo not found' });
        todo.name = name;
        todo.completed = completed;
        const updatedTodo = yield todo.save();
        return res.status(200).json({ updatedTodo });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating todo', error });
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const todo = yield Todo_1.default.findByIdAndDelete(id);
        if (!todo)
            return res.status(404).json({ message: 'Todo not found' });
        return res.status(200).json(todo);
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting todo', error });
    }
});
exports.deleteTodo = deleteTodo;
