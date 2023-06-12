/* eslint-disable react/prop-types */
import '../Style/RecipeCard.css';
import {Link} from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    const { name, prepTime, servings, image } = recipe;

    return (
        <>
            <center className="recipe-container">
                <div className="recipe-card">
                    <Link to={`/recipe?name=${name}`}>
                        <img src={image} alt={name} />
                    </Link>
                    <h3>{name}</h3>
                    <p>Prep Time: {prepTime}</p>
                    <p>Servings: {servings}</p>
                </div>
            </center>
        </>
    );
};

export default RecipeCard;