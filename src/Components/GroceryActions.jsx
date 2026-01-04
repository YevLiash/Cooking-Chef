import {useState} from 'react'
import ModalClear from './ModalClear.jsx'

function GroceryActions({onClear}) {
  const [showModalClear, setShowModalClear] = useState(false)
  return (
    <div className="mt-3 flex justify-around gap-5">
      <button
        className=" border border-[#90AB8B] text-gray-800 bg-[#EBF4DD]/20  hover:bg-[#90AB8B]/50 transition rounded-full px-3 py-2"
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
  )
}

export default GroceryActions