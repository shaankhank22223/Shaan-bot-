const express = require("express");
const { spawn } = require("child_process");
const router = express.Router();

let botProcess = null;

router.post("/start", (req, res) => {
  if (botProcess) return res.json({ error: "Bot already running" });

  botProcess = spawn("node", ["MrUzairXxX-MTX.js"]);

  botProcess.stdout.on("data", d => console.log(d.toString()));
  botProcess.stderr.on("data", d => console.error(d.toString()));

  res.json({ success: true });
});

router.post("/stop", (req, res) => {
  if (!botProcess) return res.json({ error: "Bot not running" });

  botProcess.kill();
  botProcess = null;
  res.json({ success: true });
});

module.exports = router;
