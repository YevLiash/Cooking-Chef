import {FaRegSmileWink} from 'react-icons/fa'

function RecipeInstructions({instructions}) {
  return (
    <div className="mb-2 px-2 sm:px-4 lg:px-6">
      <h2 className="uppercase font-bold text-lg my-2">Instructions</h2>
      {instructions?.length > 0 ?
        <ul className="flex flex-col gap-2">
          {instructions[0]?.steps?.map((item) => {
            return <li key={item.number}>
              <div className="flex gap-2">
                <div className="min-w-6 h-6 rounded-full text-xs bg-accent text-gray-200  flex justify-center items-center">
                  <span>{item.number}</span>
                </div>
                <div>{item.step}</div>
              </div>
            </li>
          })}
        </ul> :
        <div className="flex items-end gap-3">
          <p>Too easy for instructions. <br />Just follow your taste, your nose, and a little bit of love.
          </p>
          <FaRegSmileWink className="text-[#5A7863] text-2xl" />
        </div>}
    </div>
  )
}

export default RecipeInstructions