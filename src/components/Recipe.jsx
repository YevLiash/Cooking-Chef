import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {IoMdAlarm} from 'react-icons/io'
import {ImSpoonKnife} from 'react-icons/im'
import {FaStar} from 'react-icons/fa'
import {FaCircleCheck} from 'react-icons/fa6'
import BreakLine from './BreakLine.jsx'
import {PiShoppingCart} from 'react-icons/pi'
import Loader from './Loader.jsx'
import ErrorMessage from './ErrorMessage.jsx'
import {formatAmount} from '../utils/index.js'
import RecipeDietary from './RecipeDietary.jsx'
import RecipeOverview from './RecipeOverview.jsx'
import RecipeInstructions from './RecipeInstructions.jsx'

function Recipe() {
  const [recipe, setRecipe] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const {id} = useParams()
  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY

  useEffect(() => {
    async function fetchRecipe() {
      setError('')

      try {
        setIsLoading(true)
        const res = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        )

        if (!res.ok) {
          const errorData = await res.json()
          throw new Error(errorData.message || `Failed to fetch recipe: ${res.status}`)
        }

        const data = await res.json()
        setRecipe(data)
      } catch (err) {
        setError(err.message || 'Something went wrong...')
      } finally {
        setIsLoading(false)
      }
    }

    fetchRecipe()

    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [id])

  if (!recipe) {
    return <div className="mt-10">
      <Loader />
    </div>
  }

  const groceries = JSON.parse(localStorage.getItem('groceries')) || []

  const groceriesNames = groceries.map(item => {
    return item.toLowerCase().trim()
  })

  const sortedList = []

  recipe.extendedIngredients?.forEach(item => {
    const haveIt = groceriesNames.some(grocery => item.nameClean.toLowerCase().trim().includes(grocery))

    if (haveIt) {
      sortedList.unshift({...item, haveIt})
    } else {
      sortedList.push({...item, haveIt})
    }
  })

  return (
    <div className="flex flex-col gap-3 mt-6">
      {isLoading && <Loader />}

      {error && <ErrorMessage message={error} />}

      <div className="w-screen left-1/2 + -translate-x-1/2 lg:w-full  relative bg-accent mt-25 mb-3 pb-6 ">
        <div className="absolute -top-22 left-1/2 -translate-x-[50%] w-44 h-44 rounded-full overflow-hidden border-4 border-accent">
          <img
            src={recipe.image}
            alt={`picture of ${recipe.title}`}
            className="w-full h-full object-cover"
          />
        </div>
        <h1
          className="mt-25 recipe-title-font font-bold text-4xl text-center text-gray-100"
        >
          {recipe.title}
        </h1>
        <div className="w-[90%] mx-auto h-0.5 mt-2 bg-gray-300"></div>

        <div className="w-[90%] mx-auto mt-5 text-gray-300">
          {/*fake rating(api doesn't provide any rating)*/}
          <div className="flex gap-2 text-3xl justify-center text-gray-200">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <div className="flex justify-around mt-8">

            <div className="flex items-center gap-3">
              <IoMdAlarm className="text-lg" />
              <div className="flex flex-col sm:flex-row sm:items-center">
                <p className="uppercase leading-none">total time:</p>
                <p className="normal-case">{recipe.readyInMinutes} minutes</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ImSpoonKnife />
              <div className="flex flex-col sm:flex-row">
                <p className="uppercase">portions:</p>
                <p className="normal-case">{recipe.servings} {recipe.servings > 1 ? 'servings' : 'serving'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RecipeOverview content={recipe.summary} />

      <BreakLine />

      <div className="mb-2 px-2 sm:px-4 lg:px-6">
        <h2 className="uppercase font-bold text-lg my-2">Ingredients</h2>
        <ul className="flex flex-col gap-2">
          {sortedList.map(item => {
            return <li key={item.original}>
              <div className="flex items-center gap-2">
                <div className="w-6 flex justify-center">
                  {groceriesNames.some(g => item.nameClean.toLowerCase().trim().includes(g)) ?
                    <FaCircleCheck className="text-accent text-2xl" /> :
                    <PiShoppingCart className="text-accent text-2xl" />}
                </div>
                <p>{formatAmount(item.amount)} {item.unit} {item.nameClean}</p>
              </div>
            </li>
          })}
        </ul>
      </div>

      <BreakLine />

      <RecipeInstructions instructions={recipe.analyzedInstructions} />

      <BreakLine />

      <RecipeDietary recipe={recipe} />
    </div>
  )
}

export default Recipe