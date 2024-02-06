import Link from "next/link";
import ShowTableDB from "../components/showtableDB";


async function prodcutList() {
    let result = await fetch("http://localhost:3000/api/products",{ method:"GET" });
    result = await result.json();

   //console.log(result.result);

    return result.result;

}
export default async function Page() {
    let products = await prodcutList();
    
    return (
        <div>
            <Link href="./">Home</Link>
            <h1> Product List </h1>
            <ShowTableDB itrProducts={products}></ShowTableDB>
            
          
            {/* <ShowTable itrProducts={products}></ShowTable>  */}
            
            
            

        </div>
    )
}