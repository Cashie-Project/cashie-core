import { useState } from "react"
import NavBarItem from "./NavBarItem"
import { NavBarItemList } from "../../../models/navbar.interface"
import NavBarItemDropdown from "./NavBarItemDropdown"

const NavBar = () => {
  const [navBarItemList] = useState<NavBarItemList[]>([
    {
      type: 'dropdown',
      labelText: 'Layanan',
      value: 'layanan'
    },
    {
      type: 'dropdown',
      labelText: 'Solusi Bisnis',
      value: 'solusi_bisnis'
    },
    {
      type: 'default',
      labelText: 'Blog',
      value: 'blog'
    },
    {
      type: 'default',
      labelText: 'FAQ',
      value: 'faq'
    },
  ])

  return (
    <>
      <div className="w-auto h-auto flex items-center justify-start">
        {navBarItemList.map((navBarItem, navBarIndex) => {
          if (navBarItem.type == 'default') {
            return <NavBarItem
              key={navBarIndex}
              labelText={navBarItem.labelText}
            />
          }

          return <NavBarItemDropdown
            key={navBarIndex}
            labelText={navBarItem.labelText}
          />
        })}


      </div>
    </>
  )
}

export default NavBar
