import express from "express";
import {
  getPosts,
  getUserPosts,
  addPost,
  deletePost,
  updatePost,
  searchPost,
} from "../controllers/postsController.js";
import auth from "../middlewares/auth.js";

// Creating an instance of Express router
const router = express.Router();

// Get all posts route
router.get("/", getPosts);

// Get user's posts route
router.get("/user", auth, getUserPosts);

// Add new post route
router.post("/", auth, addPost);

// Delete post route
router.delete("/:id", auth, deletePost);

// Update post route
router.put("/:id", auth, updatePost);

//Search the post route
router.get('/gets',searchPost)

export { router as postRoutes };
