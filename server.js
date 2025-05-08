import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();
const PORT = 5000;

app.use(cors({
  origin: ["https://tibcso.dev", "http://localhost:3000"],
  methods: ["POST", "GET"],
  allowedHeaders: ["Content-Type"],
}));

app.use(bodyParser.json());

const projects = [
  {
    id: 1,
    frontImage: "https://via.placeholder.com/300x450",
    description: "Ez az első projekt backendből.",
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

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "mail.privateemail.com", 
      port: 465, // vagy 587
      secure: true, // true a 465-höz, false a 587-hez
      auth: {
        user: process.env.MAIL_USER, // hello@tibcso.dev
        pass: process.env.MAIL_PASS, // a jelszó
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `New message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Email sending failed" });
  }
});