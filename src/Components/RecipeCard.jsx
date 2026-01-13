function RecipeCard({recipe}) {
  console.log(recipe)

  return (
    <div className="flex flex-col gap-5  px-4 py-4 rounded-3xl  transition hover:scale-105">
      <div className="relative">
        <img
          className=" rounded-2xl"
          src={recipe.image}
          alt={`picture of ${recipe.title}`}
        />
        <span className="absolute whitespace-nowrap w-fit -bottom-[14px] left-1/2 -translate-x-1/2 uppercase text-sm p-1.5 bg-[#5A7863] text-gray-100">
          {recipe.dishTypes[0]}
        </span>
      </div>
      <p className="recipe-title-font font-bold text-xl text-center">
        {recipe.title}
      </p>
    </div>
  )
}

export default RecipeCard