import { Request, Response } from "express";
import { listOrders, updateOrder } from "../services/admin.service";

const notFound = (res: Response, what: string) =>
  res.status(404).json({
    success: false,
    error: { code: "NOT_FOUND", message: `${what} not found` },
  });

export async function getAllOrders(_req: Request, res: Response) {
  res.json(await listOrders());
}

export async function patchOrder(req: Request, res: Response) {
  const order = await updateOrder(String(req.params.id), req.body);
  if (!order)
    return res.status(404).json({
      success: false,
      error: { code: "NOT_FOUND", message: "Order not found" },
    });
  res.json(order);
}
