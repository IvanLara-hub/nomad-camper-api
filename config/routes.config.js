const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const usersController = require("../controllers/users.controller");
const extrasController = require("../controllers/extras.controller");
const testimonialsCrontroller = require("../controllers/testimonials.controller");
const campersController = require("../controllers/campers.controller");
const budgetController = require("../controllers/budget.controller");

const authMiddleware = require("../middlewares/auth.middleware");
const Budget = require("../models/Budget.model");
/* Auth */

router.post("/login", authController.login);

/* Users */

router.post("/users", usersController.create);
router.get("/users", usersController.list);
router.get(
  "/users/me",
  authMiddleware.isAuthenticated,
  usersController.getCurrentUser
);
router.get("/users/:id", usersController.getUser);

/* Extras */

// create
router.post("/extras", extrasController.create);
// list
router.get("/extras", extrasController.list);
// detail
router.get("/extras/:id", extrasController.detail);
// delete
router.post("/extras/:id/delete", extrasController.delete);
// update
router.post("/extras/:id", extrasController.update);

/* Testimonials */

router.post("/testimonials", testimonialsCrontroller.create);

/*Campers*/

router.post("/campers", campersController.create);
router.get("/campers", campersController.list);
router.get("/campers/:slug", campersController.detail);
router.post("/campers/:id/delete", campersController.delete);
router.post("/campers/:id", extrasController.update);

/*Budget*/

router.post("/budget", budgetController.create);


module.exports = router;
