import UserModel from "../models/user.js";

export const updateNotes = async (req, res) => {
  let notes = [];
  try {
    const { id } = req.params;
    const { NotesId } = req.body;
    const user = await UserModel.findById(id);
    notes = user.notes;
    let newNode = [...notes, NotesId];
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      {
        notes: newNode,
      },
      { new: true }
    );
    if (!updatedUser) {
      res.status(404).json({ message: "User not Updated" });
    }
    res.status(201).json({ user: updatedUser });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateTodos = async (req, res) => {
  let todo = [];
  try {
    const { id } = req.params;
    const { Todoid } = req.body;
    const user = await UserModel.findById(id);
    todo = user.todos;
    todo = [...todo, Todoid];
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      {
        todos: todo,
      },
      {
        new: true,
      }
    );
    if (!updatedUser) {
      res.status(404).json({ message: "Note not found" });
    }
    res.status(201).json({ user: updatedUser });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { updatedNote } = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      {
        notes: updatedNote,
      },
      { new: true }
    );
    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(201).json({ user: updatedUser });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      {
        todos: updatedTodo,
      },
      { new: true }
    );
    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(201).json({ user: updatedUser });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
