import {Link} from "react-router";


const Navigation = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto p-4">
                <ul className="flex justify-center space-x-6">
                    <li className="hover:text-blue-200">
                        <Link to="/" className="text-lg font-medium">
                            Dashboard
                        </Link>
                    </li>
                    <li className="hover:text-blue-200">
                        <Link to="/customers" className="text-lg font-medium">
                            Customers
                        </Link>
                    </li>
                    <li className="hover:text-blue-200">
                        <Link to="/items" className="text-lg font-medium">
                            Items
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
