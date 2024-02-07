"use client"

import { useRouter } from "next/navigation";

export default function DeleteProduct(params){
    const router = useRouter();
    const deleteRecord= async ()=>{
         let result = await fetch("http://localhost:3000/api/products/" + params.params, {
             method: "DELETE",
       
        });
        result = await result.json();
        if(result.sucess){
            alert("Record deleted !!")
            router.refresh();
            router.push("/showproducts")

        }
    }

    return (
        <div>
              <button onClick={deleteRecord}>Delete</button>
        </div>
    
    )
}

