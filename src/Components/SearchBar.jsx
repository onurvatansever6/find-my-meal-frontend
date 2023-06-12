import {useState} from 'react';
import Select from 'react-select';
import recipeData from '../Assets/Recipes.json';
import {Link, useNavigate} from 'react-router-dom';

function SearchBar() {
    const buttonStyle = {
        marginTop: "1rem",
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#f44336",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
        fontSize: "12px",
        fontWeight: "bold",
    };

    const navigate = useNavigate();
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectedIngredientValues = selectedIngredients.map((option) => option.value);
        const queryString = selectedIngredientValues.join(',');
        navigate(`/results?ingredients=${encodeURIComponent(queryString)}`);
    };

    const handleIngredientChange = (selectedOptions) => {
        setSelectedIngredients(selectedOptions);
    };

    const ingredientOptions = recipeData.reduce((options, recipe) => {
        if (recipe["ingredients"] && recipe["ingredients"]["keywords"]) {
            recipe["ingredients"]["keywords"].forEach((keyword) => {
                const option = {
                    value: keyword,
                    label: keyword,
                };
                if (!options.some((existingOption) => existingOption.value === keyword)) {
                    options.push(option);
                }
            });
        }
        return options;
    }, []);

    // noinspection JSUnusedGlobalSymbols
    const customStyles = {
        multiValueRemove: (provided) => ({
            ...provided,
            color: 'black',
        }),
        option: (provided) => ({
            ...provided,
            color: 'black',
        }),
    };

    return (
        <>
            <div>
                <Select
                    options={ingredientOptions}
                    value={selectedIngredients}
                    onChange={handleIngredientChange}
                    isMulti
                    placeholder="Search ingredients..."
                    styles={customStyles}
                />
                <Link to="/results" onClick={handleSubmit} style={buttonStyle}> Submit </Link>
            </div>
        </>
    );
}

export default SearchBar;