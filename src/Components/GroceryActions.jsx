import {useState} from 'react'
import ModalClear from './ModalClear.jsx'
import Loader from './Loader.jsx'

function GroceryActions({groceries, onClear}) {
  const [showModalClear, setShowModalClear] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const API_KEY = 'bcd2259faaff4341965649c0232af65b'


  async function fetchingRecipe() {
    const groceriesApiString = groceries
      .map((item, index) => (index === 0 ? item : `+${item}`))
      .join(',')
    console.log(groceriesApiString)
    try {
      setIsLoading(true)
      const res = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${groceriesApiString}&number=3&ignorePantry=true`)
      const data = await res.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }

  }

  return (
    <div className="flex flex-col gap-5">
      <div className="mt-3 flex justify-around gap-5">
        <button
          className=" border border-[#90AB8B] text-gray-800 bg-[#EBF4DD]/20  hover:bg-[#90AB8B]/50 transition rounded-full px-3 py-2"
          onClick={() => fetchingRecipe()}
        >Get the recipe
        </button>
        <button
          className=" border border-[#90AB8B] text-gray-800 bg-[#EBF4DD]/20  hover:bg-orange-300/30 hover:border-orange-600 hover:text-orange-800 transition rounded-full px-3 py-2"
          onClick={() => setShowModalClear(true)}
        >Clear the list
        </button>

        {showModalClear &&
          <ModalClear
            onClose={() => setShowModalClear(false)}
            onClear={onClear}
          />}

      </div>
      {isLoading && <Loader />}
    </div>
  )
}

export default GroceryActions