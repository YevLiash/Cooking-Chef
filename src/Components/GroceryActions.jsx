import {useState} from 'react'
import ModalClear from './ModalClear.jsx'

function GroceryActions({onClear, onGetRecipes, isLoading}) {
  const [showModalClear, setShowModalClear] = useState(false)


  return (
    <div className="flex flex-col gap-5">
      <div className="mt-3 flex justify-around lg:justify-center lg:gap-40 gap-5">
        <button
          className="cursor-pointer border border-[#90AB8B] text-gray-800 bg-[#EBF4DD]/20  hover:bg-[#90AB8B]/50 transition rounded-full px-3 py-2"
          onClick={onGetRecipes}
          disabled={isLoading}
        >Get the recipe
        </button>
        <button
          className="cursor-pointer border border-[#90AB8B] text-gray-800 bg-[#EBF4DD]/20  hover:bg-orange-300/30 hover:border-orange-600 hover:text-orange-800 transition rounded-full px-3 py-2"
          onClick={() => setShowModalClear(true)}
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