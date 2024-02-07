import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request,content){
    
    const filter = {_id:content.params.productid};
    const payload = await request.json();

    await mongoose.connect(connectionStr);
    let result = await Product.findOneAndUpdate(filter,payload);
   
    return NextResponse.json({result,sucess:true})
}

export async function GET(request,content){
    
    const filter = {_id:content.params.productid};

    await mongoose.connect(connectionStr);
    let result = await Product.findById(filter);
   
    return NextResponse.json({result,sucess:true})
}



export async function DELETE(request,content){
    const filter = {_id:content.params.productid}

    await mongoose.connect(connectionStr);
    let result = await Product.deleteOne(filter);

    return NextResponse.json({result,sucess:true})
} 