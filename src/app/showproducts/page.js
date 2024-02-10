"use client"
import Link from "next/link";
import ShowTableDB from "../components/showtableDB";
import { baseURL } from "@/lib/db";


async function prodcutList() {
    let result = await fetch(baseURL + "/api/products",{ method:"GET", cache: "no-store"  });
    result = await result.json();

    return result.result;

}
export default async function Page() {
    let products = await prodcutList();
    
    
    return (
        <div>    
            <br/>
            <h1> Product List </h1>
            <ShowTableDB itrProducts={products}></ShowTableDB>     
        </div>
    )
}