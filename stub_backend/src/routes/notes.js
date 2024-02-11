import express from 'express';
const router=express.Router();

router.get('/',getAllNotes);
router.get('/:id',getNotesById);
router.post('/',createNotes);
router.put('/:id',updateNotes);
router.delete('/:id',deleteNotes);

export default router;