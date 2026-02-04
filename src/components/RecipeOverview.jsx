function RecipeOverview({content}) {
  return (
    <>
      {content && <div className="mb-2 px-2 sm:px-4 lg:px-6">
        <h2 className="uppercase font-bold text-lg my-2">Recipe overview</h2>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
      </div>}
    </>
  )
}

export default RecipeOverview