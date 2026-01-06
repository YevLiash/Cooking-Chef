import {useEffect, useState} from 'react'
import Logo from './Components/Logo.jsx'
import GroceryForm from './Components/GroceryForm.jsx'
import GroceryList from './Components/GroceryList.jsx'
import ModalExist from './Components/ModalExist.jsx'
import GroceryActions from './Components/GroceryActions.jsx'
import Loader from './Components/Loader.jsx'
import RecipesList from './Components/RecipesList.jsx'

function App() {
  const [groceries, setGroceries] = useState(() => JSON.parse(localStorage.getItem('groceries')) || [])
  const [showModalExistGroceries, setShowModalExistGroceries] = useState(false)
  const [showModalSameRecipes, setShowModalSameRecipes] = useState(false)
  const [recipesList, setRecipesList] = useState(() => JSON.parse(localStorage.getItem('recipes')) || [])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    localStorage.setItem('groceries', JSON.stringify(groceries))
  }, [groceries])

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipesList))
  }, [recipesList])

  function addGrocery(value) {
    if (groceries.find(item => item.toLowerCase() === value.toLowerCase())) {
      setShowModalExistGroceries(true)
      return
    }

    setGroceries([...groceries, value])
  }

  function deleteGrocery(id) {
    setGroceries(groceries.filter((_, index) => {
      return id !== index
    }))
  }

  function clearAll() {
    setGroceries([])
    setRecipesList([])
    localStorage.removeItem('lastFetchedIngredients')
  }

  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY
  const recipeCount = 3

  async function fetchingRecipes() {
    const groceriesApiString = groceries
      .map((item, index) => (index === 0 ? item : `+${item}`))
      .join(',')

    const lastFetched = localStorage.getItem('lastFetchedIngredients') || ''

    if (groceriesApiString === lastFetched) {
      setShowModalSameRecipes(true)
      return
    }

    try {
      setIsLoading(true)
      const resList = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${groceriesApiString}&number=${recipeCount}&ignorePantry=true`)
      const dataList = await resList.json()

      if (!Array.isArray(dataList)) {
        throw new Error('Failed to load recipes')
      }

      const recipesWithInstructions = await Promise.all(
        dataList.map(async recipe => {
          const resInstructions = await fetch(`https://api.spoonacular.com/recipes/${recipe.id}/analyzedInstructions?apiKey=${API_KEY}`)
          const instructions = await resInstructions.json()

          return ({
            ...recipe,
            instructions: instructions[0]?.steps || []
          })
        })
      )
      if (recipesWithInstructions) {
        setRecipesList(recipesWithInstructions)
        localStorage.setItem('lastFetchedIngredients', groceriesApiString)
      }
      console.log(recipesList)

    } catch (err) {
      setError(err.message || 'Something went wrong...')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-[#E9EEE7] min-h-screen">

      <div className="flex flex-col justify-center  max-w-[80%] mx-auto">
        <div className="mx-auto">
          <Logo />
        </div>
        <GroceryForm
          onAdd={addGrocery}
        />
        {groceries.length > 0 && <GroceryList
          groceries={groceries}
          onDelete={deleteGrocery}
        />}
        {showModalExistGroceries &&
          <ModalExist onClose={() => setShowModalExistGroceries(false)}>This grocery is already in your list</ModalExist>}

        {groceries.length >= 3 && <GroceryActions
          groceries={groceries}
          onClear={clearAll}
          onGetRecipes={fetchingRecipes}
          isLoading={isLoading}
        />}

        {showModalSameRecipes &&
          <ModalExist onClose={() => setShowModalSameRecipes(false)}>You have already recipes for this ingredients</ModalExist>}

        {isLoading && <Loader />}

        {recipesList.length > 0 && <RecipesList recipesList={recipesList} />}

        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  )
}

export default App
