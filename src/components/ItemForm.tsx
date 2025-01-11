
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addItem, updateItem} from "../reducers/ItemSlice";
import {RootState} from "../store/Store";
import "../style/FormStyle.css"



const ItemForm = () => {
    const dispatch = useDispatch();

    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [qty, setQuantity] = useState(0);

    const currentItem = useSelector((state: RootState) => state.item.currentItem);

    useEffect(() => {
        if (currentItem) {
            setCode(currentItem.code);
            setName(currentItem.name);
            setPrice(currentItem.price);
            setQuantity(currentItem.qty);
        }
    }, [currentItem]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (code !== null) {
            dispatch(addItem({ code, name, price, qty }));
            resetForm();
        } else {
            alert("Please fill all fields.");
        }
    };
    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        if (code !== null) {
            dispatch(updateItem({ code,name , price ,qty  }));
            resetForm();
        } else {
            alert("Please provide a valid item ID to update.");
        }
    };
    const resetForm = () => {
        setCode("");
        setName("");
        setPrice(null);
        setQuantity(null);
    };

    return (
        <form className="form-container">
            <input
                type="text"
                value={code ?? ""}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Code"
                required
            />
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                type="number"
                value={price ?? ""}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="Price"
                required
            />
            <input
                type="number"
                value={qty ?? ""}
                onChange={(e) => setQuantity(Number(e.target.value))}
                placeholder="Quantity"
                required
            />
            <button type="button" onClick={handleSubmit}>
                Add Item
            </button>
            <button type="button" onClick={handleUpdate}>
                Update Item
            </button>
        </form>
    );
};

export default ItemForm;
