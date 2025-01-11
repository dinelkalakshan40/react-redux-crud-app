import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCustomer, updateCustomer} from "../reducers/CustomersSlice";
import {RootState} from "../store/Store";


const CustomerForm = () => {
    const [id,setId] =useState<number | null>(null)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const dispatch = useDispatch();

    const currentCustomer = useSelector((state: RootState) => state.customer.currentCustomer);
    useEffect(() => {
        if (currentCustomer) {
            setId(currentCustomer.id);
            setName(currentCustomer.name);
            setEmail(currentCustomer.email);
            setPhone(currentCustomer.phone);
        }
    }, [currentCustomer]);

    // Handle Add Customer
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            dispatch(addCustomer({ id, name, email, phone }));
        } else {
            alert("Add customer error")

        }
        resetForm();
    };

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {

            dispatch(updateCustomer({ id, name, email, phone }));
            resetForm();
        } else {
            alert("Please provide a valid customer ID to update.");
        }
    };
    const resetForm = () => {
        setId(null);
        setName("");
        setEmail("");
        setPhone("");
    };

    return (
        <form>
            <input type="number" value={id ?? ""} onChange={(e) => setId(Number(e.target.value))} placeholder="id"/>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required/>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required/>
            <button type="submit" onClick={handleSubmit}>Add Customer</button>
            <button type="button" onClick={handleUpdate}>Update Customer</button>
        </form>
    );
};

export default CustomerForm;
