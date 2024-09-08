import express from "express";
import routes from "./routes/index.js";
import "./config/dbConnect.js";

const app = express();
routes(app);

export default app;