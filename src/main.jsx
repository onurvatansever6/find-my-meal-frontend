import './Style/index.css';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App';
import ResultPage from "./Pages/ResultPage.jsx";
import MainPage from "./Pages/MainPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import AllRecipes from "./Pages/AllRecipes.jsx";
import RecipePage from "./Pages/RecipePage.jsx";

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/results" element={<ResultPage />} />
                <Route path="/recipe" element={<RecipePage />} />
                <Route path="/allrecipes" element={<AllRecipes />} />
                <Route path="/contact" element={<ContactPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);