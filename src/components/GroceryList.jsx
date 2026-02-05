import GroceryItem from './GroceryItem.jsx'

function GroceryList({groceries, onDelete}) {
  return (
    <div className="w-full lg:w-[80%] mx-auto flex flex-col gap-1 mt-4 border border-accent/50 px-2 sm:px-4 py-2 rounded-lg">
      {groceries.map((item, index) =>
        <GroceryItem
          key={`item, index`}
          item={item}
          onDelete={onDelete}
        />)}
    </div>
  )
}

export default GroceryList