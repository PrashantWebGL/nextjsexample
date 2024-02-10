"use client"

import "@/app/components/styles/addproduct.css"
import { baseURL } from "@/lib/db";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Page({ params }) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const [color, setColor] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        getProductDetails();


    }, []);

    const getProductDetails = async () => {
        let data = await fetch(baseURL + "/api/products/" + params.editproduct);
        data = await data.json();
        if (data.sucess) {
            let result = data.result;
            setName(result.name);
            setPrice(result.price);
            setCompany(result.company);
            setColor(result.color);
            setCategory(result.category);
        }
    }
  
    const router = useRouter();

    const updateProduct = async () => {
        if(name,price,company,color,category == "")
        {
            alert("Add all product details");
            return;
        }

        let result = await fetch(baseURL + "/api/products/" + params.editproduct, {
            method: "PUT",
            body: JSON.stringify({ name, price, company, color, category })
        });
        result = await result.json();
        if (result.sucess) {
            alert("Product  updated!");
            setName("");
            setPrice("");
            setCategory("");
            setCompany("");
            setColor("");
            router.push("/showproducts");
            
        }


    }

    return (
        <div>
            <br />
            <h2>Update Product </h2>
            <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name"  ></input>
            <input type="text" className="input" value={price}  pattern="[0-9]*" onChange={(e) => setPrice((price) => (e.target.validity.valid ? e.target.value :price))} placeholder="Enter price"  ></input>
            <input type="text" className="input" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter company name"  ></input>
            <input type="text" className="input" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter color"  ></input>
            <input type="text" className="input" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category"  ></input>
            <button className="button" onClick={updateProduct}>Update Product</button>
            <label id="result"></label>
        </div>
    )
}