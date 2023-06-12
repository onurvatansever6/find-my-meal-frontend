import '../Style/ResultPage.css';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../Components/SearchBar.jsx';
import { useState, useEffect } from 'react';
import RecipeCard from '../Components/RecipeCard.jsx';
import RecipesData from '../Assets/Recipes.json';

function ResultPage() {
    const buttonStyle = {
        marginBottom: "2rem",
        display: "inline-block",
        padding: "20px",
        backgroundColor: "#f44336",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
        fontSize: "12px",
        fontWeight: "bold",
    };

    const location = useLocation();
    const ingredients = new URLSearchParams(location.search).get('ingredients');
    const [recipes, setRecipes] = useState([]);

    const handleSearchSubmit = (selectedIngredients) => {
        const newQueryString = encodeURIComponent(selectedIngredients.join(','));
        window.history.replaceState(null, '', `/results?ingredients=${newQueryString}`);
    };

    useEffect(() => {
        const selectedIngredients = ingredients ? ingredients.split(',') : [];
        const filteredRecipes = RecipesData.filter((recipe) => {
            const recipeIngredients = recipe["ingredients"]["keywords"];
            return selectedIngredients.every((ingredient) =>
                recipeIngredients.includes(ingredient)
            );
        });
        console.log(filteredRecipes);
        setRecipes(filteredRecipes);
    }, [ingredients]);


    return (
        <>
            <center className="flexBody">
                <SearchBar onSubmit={handleSearchSubmit} />
                <p>Selected Ingredients: {ingredients}</p>
                <Link to="/" style={buttonStyle}>Go back to home</Link>
            </center>
            <div className="recipe-container">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.name} recipe={recipe} />
                ))}
            </div>
        </>
    );
}

export default ResultPage;
