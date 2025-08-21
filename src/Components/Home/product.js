"use server";
import { collectionList, dbConnect } from "@/lib/dbConnect";


export async function getSixData() {
    

    const res=await (await dbConnect(collectionList.productCollection)).find({}).limit(6).toArray();
    return res;
}