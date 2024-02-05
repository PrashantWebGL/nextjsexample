import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";

const { NextResponse } = require("next/server")

export async function GET(){
    let data=[];
    try{
        await mongoose.connect(connectionStr);
        data = await Product.find();

    }
    catch(error){
        data = {sucess:false};
    }
    
    return NextResponse.json({result:data});

}