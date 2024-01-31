import express, { Express, Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname: string = path.dirname(fileURLToPath(import.meta.url));
const app: Express = express();
const port: number = 3000;

// const isDevelopment = process.env.NODE_ENV !== "production";

// Serve static files in production mode
app.use(express.static(path.join("dist")));

// Dynamic route for components
app.get("/components/:componentName", (req: Request, res: Response) => {
  const componentName: string = req.params.componentName;
  res.sendFile(path.join(__dirname, "components", `${componentName}`));
});

// Additional routes
app.get("/about", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "components", "about.html"));
});

app.get("/contact", (req: Request, res: Response) => {
  res.send("Contact page content");
});

app.get("/home", (req: Request, res: Response) => {
  res.send("Home page content");
});

app.get("/refresh", (req: Request, res: Response) => {
  res.send("Refreshed content");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
