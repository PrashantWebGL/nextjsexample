import Link from "next/link";
import ShowTable from "../components/showtable";

async function prodcutList() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();

    return data.products;

}
export default async function Page() {
    let products = await prodcutList();
    
    return (
        <div>
            <Link href="./">Home</Link>
            <h1> Product List </h1>
          
           <ShowTable itrProducts={products}></ShowTable>
            

        </div>
    )
}