import {CiTrash} from 'react-icons/ci'

function GroceryItem({item, onDelete}) {
  return (
    <div className="flex items-center justify-between hover:bg-primary/30 px-2 py-2 rounded-lg">
      <p>{item}</p>
      <button
        onClick={() => onDelete(item)}
        className="hover:text-warning hover:scale-110 transition"
      >
        <CiTrash className="text-2xl" />
      </button>
    </div>
  )
}

export default GroceryItem