

export default function ProductTable({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          {/* Add more headers if needed */}
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            {/* Add more cells based on your data structure */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
