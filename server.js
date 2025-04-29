import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

const projects = [
  {
    id: 1,
    frontImage: "https://via.placeholder.com/300x450",
    description: "Ez az első projekt backendből!",
    linkImage: "https://via.placeholder.com/50",
    linkUrl: "https://example.com/project1",
  },
  {
    id: 2,
    frontImage: "https://via.placeholder.com/300x450",
    description: "Ez a második projekt backendből!",
    linkImage: "https://via.placeholder.com/50",
    linkUrl: "https://example.com/project2",
  },
];

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
