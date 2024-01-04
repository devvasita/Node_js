const express = require("express");
const router = express.Router();
const chairmanController = require("../../controllers/chairmanController");

router.get("/chairman", chairmanController.login);
router.get("/home", chairmanController.displayHome);
router.get("/login", chairmanController.login);
router.get("/register-page", chairmanController.chairmanRegisterPage);
router.post("/register", chairmanController.registerChairman);
router.post("/login-evalute", chairmanController.loginevaluate);
router.get("/addNotice", chairmanController.addNoticePage);


router.post("/addNoticeContent", chairmanController.addNotice);

module.exports = router;
