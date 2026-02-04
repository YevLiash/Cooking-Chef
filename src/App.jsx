import {useEffect, useState} from 'react'
import GroceryForm from './components/GroceryForm.jsx'
import GroceryList from './components/GroceryList.jsx'
import ModalExist from './components/ModalExist.jsx'
import GroceryActions from './components/GroceryActions.jsx'
import Loader from './components/Loader.jsx'
import RecipesList from './components/RecipesList.jsx'
import ErrorMessage from './components/ErrorMessage.jsx'
import {API_KEY, RECIPE_COUNT} from './constants/index.js'

function App() {
  const [groceries, setGroceries] = useState(() => JSON.parse(localStorage.getItem('groceries')) || [])
  const [showModalExistGroceries, setShowModalExistGroceries] = useState(false)
  const [showModalSameRecipes, setShowModalSameRecipes] = useState(false)
  const [recipesList, setRecipesList] = useState(() => JSON.parse(localStorage.getItem('recipes')) || [])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const isModalOpen = showModalExistGroceries || showModalSameRecipes

  useEffect(() => {
    localStorage.setItem('groceries', JSON.stringify(groceries))
  }, [groceries])

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipesList))
  }, [recipesList])

  function addGrocery(newGrocery) {
    if (groceries.find(item => item.toLowerCase() === newGrocery.toLowerCase())) {
      setShowModalExistGroceries(true)
      return
    }

    setGroceries([...groceries, newGrocery])
  }

  function deleteGrocery(name) {
    setRecipesList([])
    setGroceries(groceries.filter((item) => {
      return name !== item
    }))
  }

  function clearAll() {
    setGroceries([])
    setRecipesList([])
    localStorage.removeItem('lastFetchedIngredients')
  }

  async function fetchingRecipes() {
    setError('')

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
      const resList = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${groceriesApiString}&number=${RECIPE_COUNT}&ignorePantry=true`)
      const dataList = await resList.json()

      if (!Array.isArray(dataList)) {
        throw new Error('Failed to load recipes')
      }

      setRecipesList(dataList)
    } catch (err) {
      setError(err.message || 'Something went wrong...')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <h1 className="text-lg text-center mt-5 text-gray-600">Use what you have — get recipes you can cook right now</h1>

      <GroceryForm
        onAdd={addGrocery}
        disabled={isModalOpen}
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

      {recipesList.length > 0 && groceries.length > 2 &&
        <RecipesList recipesList={recipesList} />}

      {error && <ErrorMessage message={error} />}
    </>
  )
}

export default App
