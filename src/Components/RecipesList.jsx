import RecipeCard from './RecipeCard.jsx'
import {Link} from 'react-router-dom'

function RecipesList({recipesList}) {
  return (
    <div className="mt-8">
      <p className="mb-4 text-lg text-center font-semibold">Time to cook! Here are 4 recipes you can try right now:</p>
      <ul className=" flex justify-around flex-wrap gap-8">
        {recipesList.map(recipe => (
          <li
            key={recipe.id}
            className="max-w-[43%]"
          >
            <Link to={`/recipes/${recipe.id}`}>
              <RecipeCard recipe={recipe} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecipesList