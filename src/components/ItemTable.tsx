import { useSelector, useDispatch } from "react-redux";
import {removeItem, setCurrentItem} from "../reducers/ItemSlice";
import {RootState} from "../store/Store";
import "../style/TableStyle.css"


const ItemTable = () => {
    const items = useSelector((state: RootState) => state.item.items);
    const dispatch = useDispatch();

    const handleDelete = (code: string) => {
        dispatch(removeItem(code));
    };
    const handleRowClick = (item: {code: string; name: string; price:number; qty: number}) => {
        dispatch(setCurrentItem(item)); // Set the clicked item as current
    };

    return (
        <div className="ListContainer">
            <h2 className="header">Item List</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <tr key={item.code} onClick={() => handleRowClick(item)}>
                        <td>{item.code}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                        <td>
                            <td>
                                <button className="deleteButton" onClick={() => handleDelete(item.code)}>
                                    Delete
                                </button>
                            </td>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
};

export default ItemTable;
