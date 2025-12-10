import {useState} from "react";

function ProductAddForm({addProduct, products}) {

    const [name, setName] = useState("")
    const [category, setCategory] = useState("Elektronika")
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)

    function changeName(e) {
        setName(e.target.value)
    }
    function changeCategory(e) {
        setCategory(e.target.value)
    }
    function changePrice(e) {
        setPrice(e.target.value)
    }
    function changeQuantity(e) {
        setQuantity(e.target.value)
    }

    function add(e){
        e.preventDefault();
        const id = products[products.length-1].id +1
        const newProduct = {"id": id,"name": name,"category": category, "price": Number(price),"quantity": Number(quantity)}
        addProduct(prev => [...prev, newProduct])

    }


    return (
        <>
            <form>
                <label>Nazwa produktu <input type="text" value={name} onChange={changeName}/></label><br/>
                <label>Kategoria <select value={category} onChange={changeCategory}>
                    <option value="Elektronika">Elektronika</option>
                    <option value="Meble">Meble</option>
                    <option value="Akcesoria">Akcesoria</option>
                </select></label><br/>
                <label>Cena <input type="number" value={price} onChange={changePrice}/></label><br/>
                <label>Ilość <input type="number" value={quantity} onChange={changeQuantity}/></label><br/>
                <button onClick={add}>Dodaj produkt</button>
            </form>
        </>
    );
}

export default ProductAddForm;