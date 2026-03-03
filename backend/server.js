import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

const __dirname = path.resolve();
const dataPath = path.join(__dirname, "backend", "data", "events.json");

// GET all events
app.get("/api/events", (req, res) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to load events" });
    res.json(JSON.parse(data));
  });
});

// POST a new event
app.post("/api/events", (req, res) => {
  const newEvent = req.body;
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read file" });
    const events = JSON.parse(data);
    events.push(newEvent);
    fs.writeFile(dataPath, JSON.stringify(events, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Failed to save event" });
      res.json({ message: "Event added successfully" });
    });
  });
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
