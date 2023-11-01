const Selection = require("../models/selection");

exports.addSelection = async (req, res) => {
  try {
  
    const selection = await Selection.create(req.body);
    res.status(200).json({
      success: true,
      message: "Selection added successfully",
      selection: selection,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
};

exports.getSelection = async (req, res) => {
  try {
    const selection = await Selection.find({ user: req.params.id });
    res.status(200).json({
      success: true,
      message: "Selection listing successfully",
      selection: selection,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
};
