const express = require('express');
const router = express.Router();


const auth = require('../middleware/authentication');

const mainController = require('../controllers/main');

// get all movies

router.get('/', auth,  mainController.getAllMovies);

// add new movie to my_movies_list

router.post("/add",auth, mainController.addMovieToDB);

// login

router.post("/login", mainController.login);

// signup user 

router.post("/signup",mainController.signup )

module.exports = router;