const { Router } = require("express");
const { getAllUsers, getUserById, getUserWithTasks, getUserWithCategories, createUser, updateUser, deleteUser } = require("../controllers/users.controllers");
const authMiddleware = require("../middlewares/auth.middlewares");

const router = Router();

router.get("/users", authMiddleware, getAllUsers);

router.get("/users/:id", authMiddleware, getUserById);

router.get("/users/:id/todos", authMiddleware, getUserWithTasks);

router.get("/users/:id/categories", authMiddleware, getUserWithCategories);

router.post("/users", createUser);

router.put("/users/:id", authMiddleware, updateUser);

router.delete("/users/:id", authMiddleware, deleteUser);

module.exports = router;