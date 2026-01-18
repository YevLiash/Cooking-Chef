function RecipeCard({recipe}) {

  return (
    <div className="flex flex-col gap-5  px-4 py-4 rounded-3xl  transition hover:scale-105">
      <div className="relative">
        <img
          className=" rounded-2xl"
          src={recipe.image}
          alt={`picture of ${recipe.title}`}
        />
      </div>
      <p className="recipe-title-font font-bold text-xl text-center">
        {recipe.title}
      </p>
    </div>
  )
}

export default RecipeCard