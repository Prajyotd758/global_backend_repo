import { Order } from "../models/order.model";

const clean = ({ _id, __v, createdAt, updatedAt, ...rest }: any) => rest;

export const listOrders = () => Order.find().sort({ createdAt: -1 }).lean();

export const updateOrder = (id: string, data: any) =>
  Order.findByIdAndUpdate(id, { $set: clean(data) }, { new: true });
