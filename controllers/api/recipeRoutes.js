const router = require('express').Router();
const Recipe = require('../../models/Recipe');

// GET all recipes
router.get('/', async (req, res) => {
    try {
      const recipeData = await Recipe.findAll();
      if (!recipeData) {
        res.status(404).json({ message: 'No recipes in the database!' });
        return;
      }
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET one recipe
router.get('/:id', async (req, res) => {
    try {
      const recipeData = await Recipe.findByPk(req.params.id);
      if (!recipeData) {
        res.status(404).json({ message: 'No recipe with this id!' });
        return;
      }
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/', async (req, res) => {
    try {
      const recipeData = await Recipe.create(req.body);
      res.status(200).json(recipeData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;