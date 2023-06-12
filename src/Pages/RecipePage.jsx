/* eslint-disable react/prop-types */
import '../Style/RecipePage.css';
import recipeData from '../Assets/Recipes.json';

const RecipePage = () => {
    const recipeName = new URLSearchParams(location.search).get('name');

    const recipe = recipeData.find((recipe) => recipe.name === recipeName);

    const OrderedList = ({ items }) => {
        return (
            <ol>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        );
    };

    const UnorderedList = ({ items }) => {
        return (
            <ul>
                {Object.values(items).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        );
    };

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div className="recipe-page">
            <section className="card-section">
                <h1>{recipe.name}</h1>
                <img src={recipe.image} alt={recipe.name} />
                <p>Prep Time: {recipe["prepTime"]}</p>
                <p>Quantity Ingredients: {recipe["quantityIngredients"]}</p>
                <p>Servings: {recipe["servings"]}</p>
            </section>
            <section className="information-section">
                <h2>Directions</h2>
                <OrderedList className="directions" items={recipe["directions"]} />
                <h2>Ingredients</h2>
                <UnorderedList className="ingredients" items={recipe["ingredients"]["fullDescription"]} />
            </section>
        </div>
    );
};

export default RecipePage;
