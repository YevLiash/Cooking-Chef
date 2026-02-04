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
        className="focus:outline-none flex-1  text-gray-800 border border-accent/50 px-3 py-2 rounded-lg "
      />
      <button
        disabled={disabled}
        type="submit"
        className="cursor-pointer flex items-center border border-accent/50 text-gray-800 hover:border-action  hover:bg-action hover:text-white  transition rounded-lg px-3 py-2"
      >
        <IoIosAdd className="text-xl" />
        <span className="pr-2">Add</span>
      </button>
    </form>
  )
}

export default GroceryForm