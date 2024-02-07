"use client"
import Link from "next/link";
import ShowTableDB from "../components/showtableDB";


async function prodcutList() {
    let result = await fetch("http://localhost:3000/api/products",{ method:"GET", cache: "no-store"  });
    result = await result.json();

    return result.result;

}
export default async function Page() {
    let products = await prodcutList();
    
    
    return (
        <div>
            <Link href="./">Home</Link>
            <br/>
            <Link href="/addproduct">Add product</Link>
            <h1> Product List </h1>
            <ShowTableDB itrProducts={products}></ShowTableDB>  
            
        </div>
    )
}