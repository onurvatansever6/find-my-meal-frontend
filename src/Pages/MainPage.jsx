import { useState, useEffect } from 'react';
import '../Style/MainPage.css';
import SearchBar from '../Components/SearchBar.jsx';
import recipeData from '../Assets/Recipes.json';
import RecipeCard from '../Components/RecipeCard.jsx';

function MainPage() {
    const [currentRecipe, setCurrentRecipe] = useState(recipeData[Math.floor(Math.random() * recipeData.length)]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * recipeData.length);
            setCurrentRecipe(recipeData[randomIndex]);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={'body'}>
                <section className={'highlighted-recipes'}>
                    <h1>Highlighted Recipes</h1>
                    <div className="recipe-list">
                        {currentRecipe && <RecipeCard key={currentRecipe.id} recipe={currentRecipe} />}
                    </div>
                </section>
                <section className={'search-bar-section'}>
                    <h3>Select ingredients in your fridge:</h3>
                    <SearchBar />
                </section>
            </div>
        </>
    );
}

export default MainPage;
