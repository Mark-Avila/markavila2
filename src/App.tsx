import { useState } from "react";
import Header from "./components/Header";

function App() {

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

    return (
        <div className="min-h-full">
            <Header items={activePage} onItemClick={onNavItemClick}/>
        </div>
    );
}

export default App;