function Summary({products}) {
    let sum = 0;

    for (let product of products) {
        sum += product.price * product.quantity;
    }
    return(
        <>
            <p>Łączna wartość magazynu: {sum}zł</p>
        </>
    )
}
export default Summary;