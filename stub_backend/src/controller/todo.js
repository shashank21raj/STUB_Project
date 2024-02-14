import TodoModel from "../models/todo.js";
//Get all the Todo
export const getAllTodo = async (req, res) => {
  try {
    const allTodo = await TodoModel.find();
    res.json(allTodo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Get Todo By ID
export const getTodoById = async (req, res) => {
  try {
    const todo = await TodoModel.findById(req.params.id);
    if (!todo) {
      res.status(404).json({ message: "Notes Not found." });
    }
    res.status(201).json(todo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Post Notes
export const createTodo = async (req, res) => {
  try {
    const newTodo = new TodoModel(req.body);
    await newTodo.save();
    res.status(200).json(newTodo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Update the Notes by Id
export const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedTodo = await TodoModel.findByIdAndUpdate(id, req.body,{new:true});
    if (!updatedTodo) {
      res.status(404).json({ message: "Note not found" });
    }
    res.status(201).json(updatedTodo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Delete the Note by Id
export const deleteTodo = async (req, res) => {
  try {
    const deleteTodo = await TodoModel.findByIdAndDelete(req.params.id);
    if (!deleteTodo) {
      res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(deleteTodo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
