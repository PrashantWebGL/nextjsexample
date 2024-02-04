import Image from 'next/image'
import './showtable.css'

export default function ShowTable({ itrProducts }) {
    return (
        <div>
            <table className="product-table">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Price </th>
                        <th> Brand </th>
                        <th> Image </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itrProducts.map((item, intex) => (
                            <tr>
                                <th> {item.title} </th>
                                <th> {item.price} </th>
                                <th> {item.brand} </th>
                                <th> <Image src={item.images[0]} width={200} height={200} /> </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}