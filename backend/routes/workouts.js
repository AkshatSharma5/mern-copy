const express = require("express");
const router = express.Router();
const {createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout} = require("../controllers/workoutController")

// GET all workouts
router.get("/",getWorkouts)

// POST a new workouts
router.post("/",createWorkout);

// GET a single workout
router.get("/:id",getWorkout)

// DELETE a single workout
router.delete("/:id",deleteWorkout)

// UPDATE a workout
router.patch("/:id",updateWorkout)

module.exports = router