import dotenv from "dotenv";

import "./database";

import express from "express";
import cors from "cors";

import homeRoutes from "./routes/homeRouter";

dotenv.config();

class App {
  app: any;
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", homeRoutes);
  }
}

export default new App().app;
