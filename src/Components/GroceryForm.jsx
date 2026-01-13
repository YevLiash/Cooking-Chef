import {useState} from 'react'
import {IoIosAdd} from 'react-icons/io'

function GroceryForm({onAdd, disabled}) {
  const [grocery, setGrocery] = useState('')

  function handleAdd(e) {
    e.preventDefault()

    if (!grocery.trim()) return

    onAdd(grocery)
    setGrocery('')
  }

  return (
    <form
      aria-disabled={disabled}
      onSubmit={handleAdd}
      className="w-full lg:w-[80%] mx-auto flex gap-3 mt-8"
    >
      <input
        disabled={disabled}
        type="text"
        placeholder="Type what you have"
        value={grocery}
        onChange={e => setGrocery(e.target.value)}
        className="focus:outline-none flex-1  text-gray-800 border border-[#90AB8B] bg-[#EBF4DD]/20 px-3 py-2 rounded-full "
      />
      <button
        disabled={disabled}
        type="submit"
        className="cursor-pointer flex items-center border border-[#90AB8B] text-gray-800 bg-[#EBF4DD]/20  hover:bg-[#90AB8B]/50 transition rounded-full px-3 py-2"
      >
        <IoIosAdd className="text-xl" /> Add
      </button>
    </form>
  )
}

export default GroceryForm