import {Outlet} from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function Layout() {
  return (
    <div className="bg-[#E9EEE7] min-h-screen overflow-x-hidden">
      <div className="flex flex-col max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Layout