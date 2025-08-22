"use server";
import { collectionList, dbConnect } from "@/lib/dbConnect";




export async function getSixData() {
  const res = await (
    await dbConnect(collectionList.productCollection)
  )
    .find({})
    .limit(6)
    .sort({productPrice:1})
    .toArray();

  const data = res.map((product) => {
    return {
      _id: product._id.toString(), // convert ObjectId → string
      productName: product.productName,
      productDescription: product.productDescription,
      productPrice: product.productPrice,
      productCategory: product.productCategory,
      image: product.image,
      stock: product.stock,
      brand: product.brand,
      material: product.material,
      dimensions: product.dimensions,
      warranty: product.warranty,
    };
  });

  return data;
}
