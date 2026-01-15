import {PiChefHat} from 'react-icons/pi'
import {Link} from 'react-router-dom'

function Logo() {
  return (
    <Link to={'/'}>

      <div className="flex items-center gap-3">
        <PiChefHat className="font-bold text-5xl" />
        <h1 className="logo-font font-semibold text-4xl text-[#3B4953]">Cooking Chef</h1>
      </div>
    </Link>
  )
}

export default Logo