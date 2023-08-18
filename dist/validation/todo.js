"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoValidationRules = exports.createTodoValidationRules = void 0;
const express_validator_1 = require("express-validator");
exports.createTodoValidationRules = [
    (0, express_validator_1.body)('name').notEmpty().withMessage('Name is required'),
];
exports.updateTodoValidationRules = [
    (0, express_validator_1.param)('id').notEmpty().withMessage('Id param is required'),
    (0, express_validator_1.body)('name').notEmpty().withMessage('Name is required'),
    (0, express_validator_1.body)('completed').notEmpty().withMessage('Completed boolean is required'),
];
