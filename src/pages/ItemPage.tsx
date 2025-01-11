import ItemForm  from "../components/ItemForm";
import ItemTable from "../components/ItemTable";

const ItemPage = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 border-b-2 border-gray-300 pb-2">Item Management</h2>
            <ItemForm />
            <ItemTable />
        </div>
    );
};

export default ItemPage;