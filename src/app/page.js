import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main >
      <Link href="/products">Product Page </Link>
      <br/>
      <br/>
      <Link href="/users">Users Lists</Link>
    </main>
  );
}
