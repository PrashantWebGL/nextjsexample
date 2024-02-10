import "@/app/components/styles/header.css"
import Link from "next/link"
import homeimage from '/public/home.svg';
import addimage from '/public/file-plus.svg';
import tableimage from '/public/database.svg';
import Image from "next/image";

export default function Header() {
    return (
        <div className="HeaderStyle">
            
            <Link href="/addproduct" ><Image src={addimage} className="styleNavimage1" width={24} height={24} alt="Edit image" title="Add Product"/></Link>
            <Link href="/showproducts" ><Image src={tableimage} className="styleNavimage2" width={24} height={24} alt="Edit image" title="Show Products"/></Link>
            <Link href="https://www.linkedin.com/in/prashantdh/" target="_blank" className="createdby"><h3>Created By</h3></Link>

        </div>
    )
}