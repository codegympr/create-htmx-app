import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// Serve static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "dist")));
} else {
  app.use(express.static(path.join(__dirname, "public")));
}

// Dynamic route for components
app.get("/components/:componentName", (req, res) => {
  const componentName = req.params.componentName;
  res.sendFile(path.join(__dirname, "components", componentName));
});

app.get("/about", (req, res) => {
  // Handle the about request
  res.sendFile(path.join(__dirname, "components", "about.html"));
});

app.get("/contact", (req, res) => {
  // Handle the contact request
  res.send("Contact page content");
});

app.get("/home", (req, res) => {
  // Handle the home request
  res.send("Home page content");
});

app.get("/refresh", (req, res) => {
  // Handle the refresh request
  res.send("Refreshed content");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
