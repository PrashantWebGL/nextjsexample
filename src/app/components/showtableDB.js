import Image from 'next/image'
import './styles/showtable.css'

export default function ShowTableDB({ itrProducts }) {
    return (
        <div>
            <table className="product-table">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Price </th>
                        <th> Brand </th>
                        <th> Color </th>
                        <th> Category</th>
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
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}