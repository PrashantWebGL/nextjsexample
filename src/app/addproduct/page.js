"use client"
import "@/app/components/styles/addproduct.css"
import { baseURL } from "@/lib/db";
import Link from "next/link";
import { useState } from "react"

export default function AddPage(){
    
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [company,setCompany] = useState("");
    const [color,setColor] = useState("");
    const [category,setCategory] = useState("");
     
    const  addProduct = async ()=>{

        if(name,price,company,color,category == "")
        {
            alert("Add all product details");
            return;
        }
        
        let result = await fetch(baseURL + "/api/products",{
            method:"POST",
            body:JSON.stringify({name,price,company,color,category})
        });
        result = await result.json();
        if(result.sucess){
            alert("Product added successfully!");
            setName("");
            setPrice("");
            setCategory("");
            setCompany("");
            setColor("");
        } 
        

    }
    
    return(
       
        <div>
            <br/>
            <h2>Add Product </h2>
            <input type="text" className="input" value={name}     onChange={(e)=>setName(e.target.value)}     placeholder="Enter product name"  ></input>
            <input type="text" className="input" value={price}    pattern="[0-9]*" onChange={(e) => setPrice((price) => (e.target.validity.valid ? e.target.value :price))}    placeholder="Enter price"  ></input>
            <input type="text" className="input" value={company}  onChange={(e)=>setCompany(e.target.value)}  placeholder="Enter company name"  ></input>
            <input type="text" className="input" value={color}    onChange={(e)=>setColor(e.target.value)}    placeholder="Enter color"  ></input>
            <input type="text" className="input" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter category"  ></input>
            <button className="button" onClick={addProduct}>Add Product</button>
            <label id="result"></label>
        </div>
    )
}