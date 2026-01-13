import GroceryItem from './GroceryItem.jsx'

function GroceryList({groceries, onDelete}) {
  return (
    <div className="w-full lg:w-[80%] mx-auto flex flex-col gap-3 mt-4 border border-[#90AB8B] px-4 py-4 rounded-3xl">
      {groceries.map((item, id) =>
        <GroceryItem
          key={item}
          id={id}
          item={item}
          onDelete={onDelete}
        />)}
    </div>
  )
}

export default GroceryList