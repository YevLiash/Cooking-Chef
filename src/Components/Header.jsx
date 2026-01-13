import Logo from './Logo.jsx'

function Header() {
  return (
    <header className="shadow-sm shadow-black/10 flex items-center justify-center left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#5A7863]/5   pt-5 pb-7 ">
      <Logo />
    </header>
  )
}

export default Header