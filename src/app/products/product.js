"use server";

import { collectionList, dbConnect } from "@/lib/dbConnect";

export async function getTheProducts() {
  const res =await (await dbConnect(collectionList.productCollection))
    .find({})
    .toArray();

  const data = res.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));

  return data;
}
