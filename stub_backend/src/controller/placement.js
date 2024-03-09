import placementModel from "../models/placement.js";
export const getAllPlacement = async (req, res) => {
  try {
    const allDetails = await placementModel.find();
    res.json(allDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getPlacementById = async (req, res) => {
  try {
    const detailsById = await placementModel.findById(req.params.id);
    if (!detailsById) {
      res.status(404).json({ message: "No details found" });
    }
    res.json(detailsById);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createPlacement = async (req, res) => {
  try {
    // let originalDate = new Date(req.body.doj);
    // req.body.doj = originalDate.toISOString().split("T")[0];
    req.body.doj = new Date(req.body.doj);
    const newDetails = new placementModel(req.body);
    await newDetails.save();
    res.status(200).json(newDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updatePlacement = async (req, res) => {
  try {
    const updatedDetails = await placementModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDetails) {
      res.status(404).json({ message: "No details Updated with the id" });
    }
    res.json(updatedDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const deletePlacement = async (req, res) => {
  try {
    const deletedDetail = await placementModel.findByIdAndDelete(req.params.id);
    if (!deletedDetail) {
      res.status(404).json({ message: "No Details found" });
    }
    res.json(deletedDetail);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
