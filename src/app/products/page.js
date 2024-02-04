import ProductTable from "./producttable";
import ShowTable from "./showtable";

async function prodcutList() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();

    return data.products;

}
export default async function Page() {
    let products = await prodcutList();
    console.log(products);
    return (
        <div>
            <h1> Product List </h1>
          
           <ShowTable itrProducts={products}></ShowTable>
            

        </div>
    )
}