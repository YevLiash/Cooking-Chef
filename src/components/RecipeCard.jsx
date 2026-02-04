function RecipeCard({recipe}) {

  return (
    <div className="group  flex flex-col gap-5 items-center px-4 py-4 rounded-lg">
      <div className="relative overflow-hidden rounded-lg">
        <img
          className="group-hover:scale-110 transition"
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