import { Router } from "express";
import { requireAuth } from "../middleware/auth"; // adjust to your path
import {
  listAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
} from "../controllers/address.controller";

const router = Router();
router.use(requireAuth);

router.get("/", listAddresses);
router.post("/", createAddress);
router.put("/:id", updateAddress);
router.delete("/:id", deleteAddress);

export default router;
