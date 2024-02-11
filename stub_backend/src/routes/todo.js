import express from 'express';
const router=express.Router();

router.get('/',getAllTodo);
router.get('/:id',getTodoById);
router.post('/',createTodo);
router.put('/:id',updateTodo);
router.delete('/:id',deleteTodo);

export default router;