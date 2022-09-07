import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class HomeController {
  async findAll(req: Request, res: Response) {
    const allTasks = await prisma.task.findMany();

    res.json(allTasks);

    try {
    } catch (error) {
      console.log({ errors: [error] });
    }

    res.json("find all");
  }

  async findOne(req: Request, res: Response) {
    try {
    } catch (error) {
      res.json({ errors: [error] });
    }

    res.json("find one");
  }

  async create(req: Request, res: Response) {
    try {
    } catch (error) {
      res.json({ errors: [error] });
    }

    res.json("create");
  }

  async update(req: Request, res: Response) {
    try {
    } catch (error) {
      res.json({ errors: [error] });
    }

    res.json("update");
  }

  async delete(req: Request, res: Response) {
    try {
    } catch (error) {
      res.json({ errors: [error] });
    }

    res.json("delete");
  }
}

export default new HomeController();
