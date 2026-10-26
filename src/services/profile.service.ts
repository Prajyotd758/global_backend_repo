import { User } from "../models/user.model";
import { Address } from "../models/Address.model";
import { Order } from "../models/order.model";

// Swap this body once the Order model exists
async function getOrderSummary(userId: string) {
  const filter = { user: userId, status: "paid" };

  const [totalOrders, orders] = await Promise.all([
    Order.countDocuments(filter),
    Order.find(filter)
      .sort({ createdAt: -1 })
      .limit(3)
      .select("items total status createdAt")
      .lean(),
  ]);

  const recentOrders = orders.map((o) => ({
    _id: o._id,
    orderNumber: String(o._id).slice(-8).toUpperCase(),
    items: o.items.map((i) => ({
      name: i.title,
      image: i.image,
      quantity: i.quantity,
    })),
    total: o.total,
    status: o.status,
    createdAt: o.createdAt,
  }));

  return { totalOrders, recentOrders };
}

export async function getProfile(userId: string) {
  const [user, addresses, orders] = await Promise.all([
    User.findById(userId).select("name email createdAt").lean(),
    Address.find({ user: userId }).sort({ createdAt: -1 }).lean(),
    getOrderSummary(userId),
  ]);
  if (!user) return null;

  return {
    ...user,
    addresses,
    stats: { orders: orders.totalOrders, addresses: addresses.length },
    recentOrders: orders.recentOrders,
  };
}

export const updateProfile = (userId: string, name: string) =>
  User.findByIdAndUpdate(userId, { name }, { new: true, runValidators: true })
    .select("name email createdAt")
    .lean();
