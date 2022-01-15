import express from "express";
 
import { 
    getAllTodos,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo
} from "../controllers/Todos.js";
 
const router = express.Router();
 
router.get('/', getAllTodos);
router.get('/:id', getTodoById);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);
 
export default router;