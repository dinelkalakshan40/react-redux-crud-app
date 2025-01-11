import './App.css'
import {Route, Routes} from "react-router";
import RootLayout from "./components/RootLayout";
import Dashboard from "./pages/Dashboard";
import CustomerPage from "./pages/CustomerPage";
import ItemPage from "./pages/ItemPage";


function App() {


    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="customers" element={<CustomerPage />} />
                <Route path="items" element={<ItemPage />} />
            </Route>
        </Routes>

    );
}

export default App
