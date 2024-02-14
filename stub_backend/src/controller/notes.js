import NotesModel from "../models/notes.js";

//Get all the Notes
export const getAllNotes = async (req, res) => {
  try {
    const allNotes = await NotesModel.find();
    res.json(allNotes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Get Notes By ID
export const getNotesById = async (req, res) => {
  try {
    const note = await NotesModel.findById(req.params.id);
    if (!note) {
      res.status(404).json({ message: "Notes Not found." });
    }
    res.status(201).json(note);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Post Notes
export const createNotes = async (req, res) => {
  try {
    const newNote = new NotesModel(req.body);
    await newNote.save();
    res.status(200).json(newNote);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Update the Notes by Id
export const updateNotes = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedNote = await NotesModel.findByIdAndUpdate(id, req.body,{new:true});
    if (!updatedNote) {
      res.status(404).json({ message: "Note not found" });
    }
    res.status(201).json(updatedNote);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Delete the Note by Id
export const deleteNotes = async (req, res) => {
  try {
    const deleteNote = await NotesModel.findByIdAndDelete(req.params.id);
    if (!deleteNote) {
      res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(deleteNote);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
