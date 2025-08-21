"use server";

import { collectionList, dbConnect } from "@/lib/dbConnect";

const handleAddProducts = async (payload) => {
  try {
    const db = await dbConnect(collectionList.productCollection);
    const res = await db.insertOne(payload);
    if (res.acknowledged) return { success: true };
  } catch (error) {
    console.error("Error adding product:", error);
  }
  return { success: false };
};

export { handleAddProducts };
