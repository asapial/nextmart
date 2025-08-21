"use server";
import { collectionList, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export async function handleRegister(payload) {
  const hashed = await bcrypt.hash(payload.password, 10);
  payload.password = hashed;

  const oldUser= await (
    await dbConnect(collectionList.userCollection)
  ).findOne({email:payload.email});
  console.log("Old User :",oldUser);

  if(oldUser){
    return {success:false};
  }

  const res = await (
    await dbConnect(collectionList.userCollection)
  ).insertOne(payload);

  if (res.acknowledged) {
    return { success: true };
  } else {
    return { success: false };
  }
  console.log(payload);
}
