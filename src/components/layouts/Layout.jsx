import Navbar from './Navbar'
import Footer from './Footer'
import Spinner from './Spinner'
import Back_to_Top from './Back_to_Top'
import SettingsPopup from './SettingsPopup'

export default function Layout({children}) {
  return (
    <>
    {/* <Spinner/> */}
    <Navbar/>
    <SettingsPopup />
    <main>
      {children}
      </main>
    <Footer/>
    <Back_to_Top/>
    </>
  )
}
