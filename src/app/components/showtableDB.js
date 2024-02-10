"use client"
import Image from 'next/image'
import './styles/showtable.css'
import Link from 'next/link'
import DeleteProduct from './deleteProduct'
import myImage from '/public/edit.svg';

export default function ShowTableDB({ itrProducts }) {
    return (
        <div>
            <table className="product-table">
                <thead>
                    <tr>
                        <th> <h3> Name </h3>    </th>
                        <th> <h3> Price </h3>   </th>
                        <th> <h3> Brand </h3>   </th>
                        <th> <h3> Color </h3>   </th>
                        <th> <h3> Category </h3> </th>
                        <th> <h3> Edit </h3> </th>
                        <th> <h3> Delete </h3> </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itrProducts.map((item, intex) => (
                            <tr>
                                <th> {item.name} </th>
                                <th> {item.price} </th>
                                <th> {item.company} </th>
                                <th> {item.color} </th>
                                <th> {item.category} </th>
                                <th>
                                    <Link href={"./showproducts/" + item._id}>
                                        <Image
                                            src={myImage}
                                            width={24}
                                            height={24}
                                            alt="Edit image"
                                            title='Edit'

                                        />
                                    </Link>
                                </th>
                                <th> <DeleteProduct params={item._id}></DeleteProduct> </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}