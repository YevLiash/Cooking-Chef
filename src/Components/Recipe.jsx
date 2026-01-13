import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {IoMdAlarm, IoMdCloseCircle} from 'react-icons/io'
import {ImSpoonKnife} from 'react-icons/im'
import {FaLeaf, FaRegSmileWink, FaStar} from 'react-icons/fa'
import {FaCircleCheck} from 'react-icons/fa6'
import BreakLine from './BreakLine.jsx'
import {PiShoppingCart} from 'react-icons/pi'
import {MdOutlineGrass} from 'react-icons/md'
import {GiWheat} from 'react-icons/gi'

function Recipe() {
  const {id} = useParams()
  const recipes = JSON.parse(localStorage.getItem('recipes')) || []
  const recipe = recipes.find(item => item.id === Number(id))

  console.log(recipe)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  if (!recipe) {
    return <p className="mt-6 text-center">Recipe not found</p>
  }

  const usedIngredientsNames = recipe.usedIngredients.map(item => item.name.toLowerCase())

  const haveIngredients = recipe.extendedIngredients.filter(item => {
    return usedIngredientsNames.includes(item.nameClean)
  })

  const notHaveIngredients = recipe.extendedIngredients.filter(item => {
    return !usedIngredientsNames.includes(item.nameClean)
  })

  const sortedList = [...haveIngredients, ...notHaveIngredients]
  console.log(sortedList)

  const formatAmount = (value) => {
    if (Number.isInteger(value)) {
      return value
    }
    return value.toFixed(1)
  }

  const dietList = [
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
    <div className="flex flex-col gap-3 mt-6">

      <div className="w-screen left-1/2 + -translate-x-1/2 lg:w-full  relative bg-[#5A7863] mt-25 mb-3 pb-6 ">
        <div className="absolute -top-22 left-1/2 -translate-x-[50%] w-44 h-44 rounded-full overflow-hidden border-4 border-[#5A7863]">
          <img
            src={recipe.image}
            alt={`picture of ${recipe.title}`}
            className="w-full h-full object-cover"
          />
        </div>
        <h1
          className="mt-25 recipe-title-font font-bold text-4xl text-center text-gray-100"
        >
          {recipe.title}
        </h1>
        <div className="w-[90%] mx-auto h-0.5 mt-2 bg-gray-300"></div>
        <div className="w-[90%] mx-auto mt-5 text-gray-300">
          {/*fake rating(api doesn't provide any rating)*/}
          <div className="flex gap-2 text-3xl justify-center text-gray-200">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="flex justify-around mt-8">

            <div className="flex items-center gap-3">
              <IoMdAlarm className="text-lg" />
              <p className="uppercase leading-none">total time: <span className="normal-case">{recipe.readyInMinutes} minutes</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <ImSpoonKnife />
              <p className="uppercase">portions: <span className="normal-case">{recipe.servings} {recipe.servings > 1 ? 'servings' : 'serving'}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {recipe.summary && <div className="mb-2 px-4">
        <h2 className="uppercase font-bold text-lg my-2">Recipe overview</h2>
        <div dangerouslySetInnerHTML={{__html: recipe.summary}}></div>
      </div>}

      <BreakLine />

      <div className="mb-2 px-4">
        <h2 className="uppercase font-bold text-lg my-2">Ingredients</h2>
        <ul className="flex flex-col gap-2">
          {sortedList.map(item => {
            return <li key={item.original}>
              <div className="flex items-center gap-2">
                <div className="w-6 flex justify-center">
                  {usedIngredientsNames.includes(item.nameClean) ?
                    <FaCircleCheck className="text-[#5A7863] text-2xl" /> :
                    <PiShoppingCart className="text-[#5A7863] text-2xl" />}
                </div>
                <p>{formatAmount(item.amount)} {item.unit} {item.nameClean}</p>
              </div>
            </li>
          })}
        </ul>
      </div>

      <BreakLine />

      <div className="mb-2 px-4">
        <h2 className="uppercase font-bold text-lg my-2">Instructions</h2>
        {recipe.analyzedInstructions.length > 0 ?
          <ul className="flex flex-col gap-2">
            {recipe.analyzedInstructions[0].steps.map((item) => {
              return <li key={item.number}>
                <div className="flex gap-2">
                  <div className="min-w-6 h-6 rounded-full text-xs bg-[#5A7863] text-gray-200  flex justify-center items-center">
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

      <BreakLine />

      <div>
        <h2 className="uppercase font-bold text-lg my-2">
          Dietary Info
        </h2>
        <div className="flex flex-wrap gap-3">
          {dietList.map(badge =>
              badge.value && (
                <div
                  key={badge.key}
                  className="flex items-center gap-2 px-4 py-2
                     rounded-full bg-[#5A7863]/10
                     text-[#5A7863] text-sm font-medium"
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

    </div>
  )
}

export default Recipe