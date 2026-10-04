import { User } from "../models/user.model";
import { Address } from "../models/Address.model";
import { Cart } from "../models/cart.model";
import { Wishlist } from "../models/wishList.model";

// Swap this body once the Order model exists
async function getOrderSummary(userId: string) {
  // const [totalOrders, recentOrders] = await Promise.all([
  //   Order.countDocuments({ user: userId }),
  //   Order.find({ user: userId }).sort({ createdAt: -1 }).limit(3).lean(),
  // ]);
  return { totalOrders: 0, recentOrders: [] as unknown[] };
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
