import CustomerTable from "../components/CustomerTable";
import CustomerForm from "../components/CustomerForm";


const CustomerPage = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 border-b-2 border-gray-300 pb-2">Customer Management</h2>
            <CustomerForm />
            <CustomerTable />
        </div>
    );
};

export default CustomerPage;