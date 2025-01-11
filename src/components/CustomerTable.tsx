import { useSelector, useDispatch } from "react-redux";
/*import {RootState} from "@reduxjs/toolkit/query";*/
import {removeCustomer,setCustomerForEdit} from "../reducers/CustomersSlice";
import {RootState} from "../store/Store"



const CustomerTable = () => {
    const customers = useSelector((state: RootState) => state.customer.customers);
    const dispatch = useDispatch();


    const handleDelete = (id: number) => {
        dispatch(removeCustomer(id)); // Dispatch the delete action
    };
    const handleEdit = (customer: { id: number; name: string; email: string; phone: string }) => {
        // Dispatch the action to set customer data for editing
        dispatch(setCustomerForEdit(customer));
    };


    return (
        <div>
            <h2>Customer List</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                    <tr key={customer.id} onClick={() => handleEdit(customer)}>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>
                            <button onClick={() => handleDelete(customer.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerTable;
