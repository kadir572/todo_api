"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const todo_1 = __importDefault(require("./routes/todo"));
const app = (0, express_1.default)();
dotenv_1.default.config();
mongoose_1.default
    .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@kadircluster.k6m3g.mongodb.net/todo_app?retryWrites=true&w=majority`)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB', error));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const allowedOrigins = [(_a = process.env.UI_URL) !== null && _a !== void 0 ? _a : ''];
app.use((0, cors_1.default)({
    origin: allowedOrigins,
}));
app.use('/todos', todo_1.default);
const port = process.env.PORT || process.env.SERVER_PORT;
app.listen(port, () => console.log(`App running on port ${port}`));
