import { Request, Response } from "express";

class HomeController {
  async index(req: Request, res: Response) {
    res.json("index V1");
  }
}

export default new HomeController();
