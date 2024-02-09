"use client"

import { baseURL } from "@/lib/db";
import Image from "next/image";
import { useRouter } from "next/navigation";
import myImage from '/public/trash.svg';

export default function DeleteProduct(params) {
    const router = useRouter();
    const deleteRecord = async () => {
        let result = await fetch(baseURL + "/api/products/" + params.params, {
            method: "DELETE",

        });
        result = await result.json();
        if (result.sucess) {
            alert("Record deleted !!")
            router.refresh();
            router.push("/showproducts")

        }
    }

    return (
        <div>
           
            <Image
                src={myImage}
                width={24}
                height={24}
                alt="Delete Image"
                onClick={deleteRecord}
            />

        </div>

    )
}

