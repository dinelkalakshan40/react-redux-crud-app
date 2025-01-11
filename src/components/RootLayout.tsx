import Navigation from "./Navigation";
import {Outlet} from "react-router";


const RootLayout = () => {
    return (
        <div>
            <header>
                <Navigation />
            </header>
            <main style={{ padding: "1rem" }}>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;