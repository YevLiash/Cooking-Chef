import {useState} from 'react'
import ModalClear from './ModalClear.jsx'

function GroceryActions({onClear, onGetRecipes, isLoading}) {
  const [showModalClear, setShowModalClear] = useState(false)


  return (
    <div className="flex flex-col gap-5">
      <div className="mt-3 flex justify-around lg:justify-center lg:gap-40 gap-5">
        <button
          className="cursor-pointer border border-accent/50 text-gray-800 hover:border-action  hover:bg-action hover:text-white transition rounded-lg px-3 py-2"
          onClick={onGetRecipes}
          disabled={isLoading}
        >Get the recipe
        </button>
        <button
          className="cursor-pointer border border-accent/50 text-gray-800 hover:border-warning  hover:bg-warning hover:text-white transition rounded-lg px-3 py-2"
          onClick={(e) => {
            setShowModalClear(true)
            e.currentTarget.blur()
          }}

          disabled={isLoading}
        >Clear the list
        </button>

        {showModalClear &&
          <ModalClear
            onClose={() => setShowModalClear(false)}
            onClear={onClear}
          />}

      </div>

    </div>
  )
}

export default GroceryActions