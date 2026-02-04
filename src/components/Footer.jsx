import {GiKnifeFork} from 'react-icons/gi'

function Footer() {
  return (
    <footer className="h-10 flex justify-center items-center   mt-auto px-4 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-primary/10  border-t border-t-primary text-xs text-gray-500">
      <div className=" flex justify-center items-center gap-2">
        <GiKnifeFork />
        <span>Cook smarter, not harder</span>
      </div>
    </footer>
  )
}

export default Footer