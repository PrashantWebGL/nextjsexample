

export async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const jsonData = await response.json();

    return jsonData;

}

export async function Products1() {
    const jsonData = await getProducts();
    console.log(jsonData);
    return (
        <div>
            <h1>Product List  :: </h1>
            <h3>
                {
                    // jsonData.map((item) => {
                    //     console.log({item});
                    //     <div></div>
                    // })
                }</h3>
        </div>
    )
}