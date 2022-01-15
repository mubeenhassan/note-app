import Todo from "../models/todoModal.js";
 
export const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(todo[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createTodo = async (req, res) => {
    try {
        console.log("Hello res",req.body)
        await Todo.create(req.body);
        res.json({
            "message": "Todo Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateTodo = async (req, res) => {
    try {
        await Todo.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Todo Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteTodo = async (req, res) => {
    try {
        await Todo.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Todo Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}