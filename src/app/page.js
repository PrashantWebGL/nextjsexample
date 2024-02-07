import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main >
      
      {/* <Link href="/products">Product Page </Link>
      <br/>
      <br/>
      <Link href="/users">Users Lists</Link> */}
      
      <br/>
      <Link href="/addproduct">Add product</Link>
      <br/>
      <br/>
      <Link href="/showproducts">Show Product</Link>
    </main>
  );
}
