import factory from "./handlerFactory";
import Category from "../models/categoryModel";

const CategoryController = {
  create: factory.createOne(Category),
  update: factory.updateOne(Category),
  getAll: factory.getAll(Category),
};

export default CategoryController;
