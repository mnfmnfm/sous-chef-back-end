const mongoose = require('mongoose');

const recipeScehma = new mongoose.Schema({
  name: String,
  link: String,
  source: String,
  ingredients: Array,
  email: String
});

const Recipe = mongoose.model('Recipe', recipeScehma);

//send off the recipe model to be constructed by the handler functions.
module.exports = Recipe;

