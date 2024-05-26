import express from "express";
import cors from "cors";
import morgan from "morgan";

// Middlewares
const app = express();
app.use(cors());
app.use(morgan("dev"));

// Routes
app.get("/test", (req, res) => {
  res.status(200).json("The API works");
});

app.listen(8000, () => console.log("Server running on http://localhost:8000"));
