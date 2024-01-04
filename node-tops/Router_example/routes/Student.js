import express from "express";

const router = express.Router();

router.get("/students/all", (req, res) => {
  res.send("Hello...................");
});

export default router;
