import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename)

const app = express();
dotenv.config({ path: "./config/config.env" });

console.log(__dirname)

// Middleware
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["POST"],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter);

app.use(express.static(path.join(__dirname,'/client/dist')))
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'/client/dist/index.html')))

dbConnection();

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(errorMiddleware);

// Example route
app.get("/home", (req, res) => {
  res.status(200).send("Home page");
});

export default app;
