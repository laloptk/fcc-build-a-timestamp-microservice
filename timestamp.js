import { Router } from "express";
import { isValidParam } from "./helpers.js";

const router = Router();

router.get("/", (_req, res) => {
  const now = new Date();
  res.json({ unix: now.getTime(), utc: now.toUTCString() });
});

router.get("/:date", isValidParam, (req, res) => {
  const d = req.parsedDate;
  res.json({ unix: d.getTime(), utc: d.toUTCString() });
});

export default router;