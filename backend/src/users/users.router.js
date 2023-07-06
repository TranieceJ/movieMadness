const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./users.controller");

// SPECIFIC WATCHLIST FOR A SPECIFIC USER
router.route("/:user_id/watchLists/:watchList_id").get(controller.read).all(methodNotAllowed);

// ALL WATCHLISTS FOR A SPECIFIC USER
router.route("/:user_id/watchLists").post(controller.create).all(methodNotAllowed); // SHOULD WE MAKE A GET LIST REQUEST FOR BOTH ROUTES?

// SPECIFIC USER 
router.route("/:user_id").get(controller.list).all(methodNotAllowed);


module.exports = router;

// router.route("/").all(methodNotAllowed);