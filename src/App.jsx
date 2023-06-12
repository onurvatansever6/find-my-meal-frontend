import './Style/App.css';
import websiteLogo from "./Assets/logos_transparent.png";
import { Outlet } from "react-router-dom";

function App() {
    const handleHomeClick = () => {
        window.location.href = '/';
    };
    const handleAllRecipesClick = () => {
        window.location.href = '/allrecipes';
    };
    const handleContactClick = () => {
        window.location.href = '/contact';
    };

    return (
        <>
            <div className={"navbar"}>
                <img className={"websiteLogo"} src={websiteLogo} alt={"websiteLogo"}/>
                <section className={"navbarLinks"}>
                    <button className={"navbarButtons"} onClick={handleHomeClick}>Home</button>
                    <button className={"navbarButtons"} onClick={handleAllRecipesClick}>All Recipes</button>
                    <button className={"navbarButtons"} onClick={handleContactClick}>Get in Touch</button>
                </section>
                <h3 className={"navbarSlogan"}> Find your next dinner in seconds! </h3>
            </div>
            <Outlet/>
        </>
    );
}

export default App;