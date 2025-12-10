import 'bootstrap/dist/css/bootstrap-grid.min.css';

function ProductList({products}) {


    return (
        <>
            <table className="table table-striped">
                <tr>
                    <th>Nazwa</th>
                    <th>Kategoria</th>
                    <th>Cena</th>
                    <th>Ilość</th>
                    <th>Wartość</th>
                </tr>
                {products.map((product) => (<tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price * product.quantity}</td>
                </tr>))}
            </table>
        </>
    )
}
export default ProductList;