import {PiChefHat} from 'react-icons/pi'

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <PiChefHat className="font-bold text-5xl" />
      <h1 className="logo-font font-semibold text-4xl text-[#3B4953]">Cooking Chef</h1>
    </div>
  )
}

export default Logo