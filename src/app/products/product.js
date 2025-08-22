"use server";

import { collectionList, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function getTheProducts() {
  const res = await (
    await dbConnect(collectionList.productCollection)
  )
    .find({})
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


export async function getOneProduct(id) {
  const res =await( await dbConnect(collectionList.productCollection)).findOne({ _id: new ObjectId(id) });

  if (!res) return null;

  return {
    _id: res._id.toString(), // convert ObjectId → string
    productName: res.productName,
    productDescription: res.productDescription,
    productPrice: res.productPrice,
    productCategory: res.productCategory,
    image: res.image,
    stock: res.stock,
    brand: res.brand,
    material: res.material,
    dimensions: res.dimensions,
    warranty: res.warranty,
  };
}

