import CustomerTable from "../components/CustomerTable";
import CustomerForm from "../components/CustomerForm";


const CustomerPage = () => {
    return (
        <div>
            <h2>Customer Management</h2>
            <CustomerForm />
            <CustomerTable />
        </div>
    );
};

export default CustomerPage;