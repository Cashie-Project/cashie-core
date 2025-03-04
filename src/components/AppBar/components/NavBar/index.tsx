import { useState } from "react"
import { NavBarItemList } from "../../../../models/navbar.interface"
import NavBarItem from "./components/NavBarItem"
import NavBarItemDropdown from "./components/NavBarItemDropdown"
import { PAGE_BLOG, PAGE_FAQ, PAGE_HOME } from "../../../../utils/constants/page.constants"

const NavBar = () => {
  const [navBarItemList] = useState<NavBarItemList[]>([
    {
      type: 'dropdown',
      labelText: 'Layanan',
      value: 'layanan',
      pageUrl: '',
      items: [
        {
          labelText: 'Jualan Offline',
          value: 'jualan_offline',
          items: [
            {
              labelText: 'Point of Sale',
              value: 'point_of_sale',
              pageUrl: PAGE_HOME
            },
            {
              labelText: 'Manajemen Pelanggan',
              value: 'manajemen_pelanggan',
              pageUrl: PAGE_HOME
            },
            {
              labelText: 'Manajemen Stok',
              value: 'manajemen_stok',
              pageUrl: PAGE_HOME
            },
            {
              labelText: 'Manajemen Karyawan',
              value: 'manajemen_karyawan',
              pageUrl: PAGE_HOME
            },
          ]
        },
        {
          labelText: 'Jualan Online',
          value: 'jualan_online',
          items: [
            {
              labelText: 'Online Order Management',
              value: 'online_order_management',
              pageUrl: PAGE_HOME
            }
          ]
        },
      ]
    },
    {
      type: 'dropdown',
      labelText: 'Solusi Bisnis',
      value: 'solusi_bisnis',
      pageUrl: '',
      items: [
        {
          labelText: 'Restoran Cepat Saji',
          value: 'restoran_cepat_saji',
          pageUrl: PAGE_HOME
        },
        {
          labelText: 'Kedai Kopi',
          value: 'kedai_kopi',
          pageUrl: PAGE_HOME
        },
        {
          labelText: 'Barbeshop & Salon',
          value: 'barbershop_and_salon',
          pageUrl: PAGE_HOME
        },
      ]
    },
    {
      type: 'default',
      labelText: 'Blog',
      value: 'blog',
      pageUrl: PAGE_BLOG,
      items: []
    },
    {
      type: 'default',
      labelText: 'FAQ',
      value: 'faq',
      pageUrl: PAGE_FAQ,
      items: []
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
              pageUrl={navBarItem.pageUrl!}
            />
          }

          return <NavBarItemDropdown
            key={navBarIndex}
            labelText={navBarItem.labelText}
            value={navBarItem.value}
            items={navBarItem.items}
          />
        })}
      </div>
    </>
  )
}

export default NavBar
