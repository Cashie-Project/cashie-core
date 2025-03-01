import { NavBarItemInterface } from "../../../models/navbar-item.interface"

const NavBarItem = (props: NavBarItemInterface) => {
  return (
    <>
      <button
        type="button"
        className="w-auto h-auto px-[20px] py-[10px] font-roboto text-[14px] leading-[20px] text-[#000000] bg-[#FFFFFF] cursor-pointer"
      >
        {props.labelText}
      </button>
    </>
  )
}

export default NavBarItem 
