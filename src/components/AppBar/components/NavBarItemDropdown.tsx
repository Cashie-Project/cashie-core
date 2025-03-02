import { NavBarItemDropdownInterface } from "../../../models/navbar-item-dropdown.interface"
import ExpandMoreIcon from '../../../assets/images/svg/expand_more_24px.svg'
import { useState } from "react";

const NavBarItemDropdown = (props: NavBarItemDropdownInterface) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setIsShowDropdown(!isShowDropdown);
  }

  return (
    <>
      <div className="w-auto h-auto relative">
        <button
          type="button"
          className="w-auto h-auto px-[20px] py-[10px] flex items-center justify-center cursor-pointer bg-[#FFFFFF] gap-[10px]"
          onClick={handleToggleDropdown}
        >
          <p className="font-roboto text-[16px] leading-[24px] text-[#000000]">{props.labelText}</p>
          <img
            src={ExpandMoreIcon}
            alt="Expand more icon"
            loading="lazy"
            className={`w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] transition-all ${isShowDropdown ? 'rotate-180' : ''}`}
          />
        </button>

        {isShowDropdown && (
          <>
            <div className="w-auto h-auto absolute top-[45px] left-[0px] bg-[#FFFFFF] rounded-[12px] shadow-md flex items-start justify-start py-[25px] flex-nowrap border-[1px] border-[#D9D9D9]">
              <div className="w-auto h-auto px-[25px] flex flex-col items-start justify-start flex-nowrap border-r-[1px] border-[#D9D9D9]">
                <p className="whitespace-nowrap">Item 1</p>
              </div>
              <div className="w-auto h-auto px-[25px] flex flex-col items-start justify-start flex-nowrap">
                <p className="whitespace-nowrap">Item 2</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default NavBarItemDropdown