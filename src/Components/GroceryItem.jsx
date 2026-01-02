import {CiTrash} from 'react-icons/ci'

function GroceryItem({id, item, onDelete}) {
  return (
    <div className="flex items-center justify-between bg-[#EBF4DD]/50 px-2 py-2 rounded-xl">
      <p>{item}</p>
      <button
        onClick={() => onDelete(id)}
        className="hover:text-red-800 hover:font-bold transition"
      >
        <CiTrash className="text-2xl " />
      </button>
    </div>
  )
}

export default GroceryItem