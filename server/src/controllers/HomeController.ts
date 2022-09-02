import { Request, Response } from "express";

class HomeController {
  async index(req: Request, res: Response) {
    res.json("index");
  }
}

export default new HomeController();
