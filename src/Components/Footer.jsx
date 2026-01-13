import {GiKnifeFork} from 'react-icons/gi'

function Footer() {
  return (
    <footer className=" left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-10 pb-3 border-t border-t-[#90AB8B]/40 texxt-center text-xs text-gray-500">
      <div className=" mt-3 flex justify-center items-center gap-2">
        <GiKnifeFork />
        <span>Cook smarter, not harder</span>
      </div>
    </footer>
  )
}

export default Footer