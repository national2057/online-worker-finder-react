const mongoose = require("mongoose");
const { Category } = require("../models/category.model");
const { Schema } = mongoose;

exports.createCategory = async (req, res) => {
  try {
    const { image, title, description } = req.body;
    const userId = req.id;
    if (!image || !title || !description || !userId) {
      return res.status(400).json({
        message: "Something is missing!!",
        success: false,
      });
    }
    let category = await Category.create({
      image,
      title,
      description,
      userId: req.id,
    });
    return res.status(200).json({
      message: "New category created successfully.",
      category,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    //  const keyword = req.query.keyword || "";
    const keyword = req.query.keyword ? String(req.query.keyword) : "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { category: { $regex: keyword, $options: "i" } },
      ],
    };

    const categories = await Category.find(query);
    if (!categories) {
      return res.status(404).json({
        message: "Jobs not found!!",
        success: false,
      });
    }
    return res.status(200).json({
      categories,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({
        message: "Job not found!!",
        success: false,
      });
    }
    return res.status(200).json({
      category,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
