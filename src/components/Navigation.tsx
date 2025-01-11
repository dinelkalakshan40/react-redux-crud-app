import {Link} from "react-router";


const Navigation = () => {
    return (
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
            <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/customers">Customers</Link>
                </li>
                <li>
                    <Link to="/items">Items</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
