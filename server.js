import express from "express";
import cors from "cors";
import apiRouter from "./timestamp.js";
import { isValidParam } from "./helpers.js";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});

app.use("/api", apiRouter);

// Do not change code above this line

// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
