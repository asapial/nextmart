"use server";

import { collectionList, dbConnect } from "@/lib/dbConnect";

const handleAddProducts=async (payload)=>{

    try {
        const res=await (await dbConnect(collectionList.productCollection)).insertOne(payload);
        if(res.acknowledged){
            return {success:true};
        }
    } catch (error) {
        return {success:false};
    }

    console.log("payload form :" , payload);
}

export  {handleAddProducts};