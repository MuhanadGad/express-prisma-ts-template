import { Request, Response } from "express";
import * as service from "./users.service";
import { commonValidations } from "@/common/validation/helper.schema";
import { paginationSchema } from "@/common/validation/pagination.schema";

export async function listUsers(_req: Request, res: Response) {
  console.log(_req.query);
  const { skip, take } = paginationSchema.parse(_req.query);
  const users = await service.listUsers(skip, take);
  res.json(users);
}

export async function getUser(req: Request, res: Response) {
  const user = await service.getUser(Number(req.params.id));
  res.json(user);
}

export async function createUser(req: Request, res: Response) {
  const user = await service.createUser(req.body);
  res.status(201).json(user);
}

export async function updateUser(req: Request, res: Response) {
  const id = commonValidations.id.parse(req.params.id);

  const user = await service.updateUser(req.body, id);
  res.status(201).json(user);
}
