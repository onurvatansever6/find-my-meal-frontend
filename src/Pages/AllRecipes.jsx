import '../Style/AllRecipes.css';
import recipeData from '../Assets/Recipes.json';
import RecipeCard from "../Components/RecipeCard.jsx";

function AllRecipes () {
    return (
        <>
            <div className="recipe-list-container">
                <h1>Recipes</h1>
                <div className="recipe-list">
                    {recipeData.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AllRecipes;