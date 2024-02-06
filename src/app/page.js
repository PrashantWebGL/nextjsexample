import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main >
      <br/>
      <br/>
      <Link href="/products">Product Page </Link>
      <br/>
      <br/>
      <Link href="/users">Users Lists</Link>
      <br/>
      <br/>
      <Link href="/addproduct">Add product page</Link>
      <br/>
      <br/>
      <Link href="/showproducts">Show Product</Link>
    </main>
  );
}
