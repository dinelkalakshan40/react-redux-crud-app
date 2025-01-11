import ItemForm  from "../components/ItemForm";
import ItemTable from "../components/ItemTable";

const ItemPage = () => {
    return (
        <div>
            <h2>Item Management</h2>
            <ItemForm />
            <ItemTable />
        </div>
    );
};

export default ItemPage;