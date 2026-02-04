import {FaLeaf} from 'react-icons/fa'
import {MdOutlineGrass} from 'react-icons/md'
import {GiWheat} from 'react-icons/gi'
import {IoMdCloseCircle} from 'react-icons/io'

function RecipeDietary({recipe}) {
  const dietaryIconsList = [
    {
      key: 'vegan',
      name: 'Vegan',
      value: recipe.vegan,
      icon: <FaLeaf />
    },
    {
      key: 'vegetarian',
      name: 'Vegetarian',
      value: recipe.vegetarian,
      icon: <MdOutlineGrass />
    },
    {
      key: 'glutenFree',
      name: 'Gluten Free',
      value: recipe.glutenFree,
      icon: <GiWheat />
    },
    {
      key: 'dairyFree',
      name: 'Dairy Free',
      value: recipe.dairyFree,
      icon: <IoMdCloseCircle />
    }
  ]

  return (
    <div className="px-2 sm:px-4 lg:px-6 mb-8">
      <h2 className="uppercase font-bold text-lg my-2">
        Dietary Info
      </h2>
      <div className="flex flex-wrap gap-3">
        {dietaryIconsList.map(badge =>
            badge.value && (
              <div
                key={badge.key}
                className="flex items-center gap-2 px-4 py-2
                     rounded-lg bg-accent/10
                     text-accent text-sm font-medium"
              >
                  <span className="text-lg">
                    {badge.icon}
                  </span>
                <span>{badge.name}</span>
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default RecipeDietary