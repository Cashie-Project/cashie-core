import { useEffect, useState } from "react"
import AdditionalButton from "./components/AdditionalButton"
import AppLogo from "./components/AppLogo"
import NavBar from "./components/NavBar"

const AppBar = () => {
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
  }

  return (
    <>
      <div className={`w-full h-auto px-[100px] py-[20px] flex items-center justify-between gap-[20px] bg-[#FFFFFF] fixed top-0 left-0 right-0 z-[9999] transition-all ${isScroll ? 'shadow-lg' : ''}`}>
        <AppLogo />
        <NavBar />
        <AdditionalButton />
      </div>
    </>
  )
}

export default AppBar