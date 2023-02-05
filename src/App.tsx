import { useState } from "react";
import Header from "./components/Header";

function App() {

    const [isMobileOpen, setMobileOpen] = useState(false);

    const [activePage, setActivePage] = useState({
        Home: true,
        About: false,
        Tech: false,
        Project: false,
        Contact: false,
    });

    const onNavItemClick = (key: string) => {
        const initialState: typeof activePage = {
            Home: false,
            About: false,
            Tech: false,
            Project: false,
            Contact: false,
        }

        return setActivePage({...initialState, [key]: true});
    }

    const toggleMobileOpen = () => {
        setMobileOpen(!isMobileOpen)
    }

    return (
        <div className="min-h-full">
            <Header items={activePage} toggleMobileOpen={toggleMobileOpen} isMobileOpen={isMobileOpen} onItemClick={onNavItemClick}/>
        </div>
    );
}

export default App;