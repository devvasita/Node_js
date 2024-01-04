import express from "express";
import router from "./routes/Student.js";
const app = express();

// Mount the studentRouter under the "/careerCenter" path
app.use(router);

app.listen(9090, () => {
  console.log("Server started on port 9090");
});
