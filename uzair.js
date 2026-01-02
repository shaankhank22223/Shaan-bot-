const express = require("express");
const path = require("path");
const logger = require("./utils/log");
const { spawn } = require("child_process");

// ================= PANEL =================
const app = express();
const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  logger(`Panel running on port ${PORT}`, "[ PANEL ]");
});

// ================= BOT START =================
const BOT_FILE = "𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿.js";

// 🔎 Detect Render
const isRender = !!process.env.RENDER;

if (isRender) {
  // ✅ RENDER MODE (NO SPAWN)
  logger("Render detected → starting bot in same process", "[ BOT ]");
  try {
    require(`./${BOT_FILE}`);
    logger("Bot started (Render mode)", "[ BOT ]");
  } catch (err) {
    logger("Bot error: " + err.message, "[ BOT ERROR ]");
  }
} else {
  // ✅ VPS / LOCAL MODE (SPAWN)
  logger("Local/VPS detected → starting bot with spawn", "[ BOT ]");

  let restartCount = 0;

  function startBot() {
    const child = spawn("node", [BOT_FILE], {
      cwd: __dirname,
      stdio: "inherit",
      shell: true
    });

    child.on("close", (code) => {
      if (code !== 0 && restartCount < 5) {
        restartCount++;
        logger(`Bot crashed. Restarting (${restartCount}/5)`, "[ RESTART ]");
        startBot();
      } else {
        logger("Bot stopped.", "[ STOPPED ]");
      }
    });
  }

  startBot();
}
