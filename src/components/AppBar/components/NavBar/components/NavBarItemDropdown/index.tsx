import { NavBarItemDropdownInterface } from "../../../../../../models/navbar-item-dropdown.interface";
import { useEffect, useRef, useState } from "react";
import ExpandMoreIcon from '../../../../../../assets/images/svg/expand_more_24px.svg';
import ServiceDropdown from "./components/ServiceDropdown";
import BusinessSolutionDropdown from "./components/BusinessSolutionDropdown";

const NavBarItemDropdown = (props: NavBarItemDropdownInterface) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (wrapperRef.current && !wrapperRef.current.contains(target)) {
      setIsShowDropdown(false);
    }
  };

  const handleToggleDropdown = () => {
    setIsShowDropdown(!isShowDropdown);
  };

  return (
    <>
      <div ref={wrapperRef} className="w-auto h-auto relative">
        <button
          type="button"
          className="w-auto h-auto px-[20px] py-[10px] flex items-center justify-center cursor-pointer bg-[#FFFFFF] gap-[10px]"
          onClick={handleToggleDropdown}
        >
          <p className="font-roboto text-[16px] leading-[24px] text-[#000000] font-[600]">{props.labelText}</p>
          <img
            src={ExpandMoreIcon}
            alt="Expand more icon"
            loading="lazy"
            className={`w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] transition-all ${isShowDropdown ? 'rotate-180' : ''}`}
          />
        </button>

        {isShowDropdown && (
          <>
            {props.value == 'layanan' ? <ServiceDropdown
              items={Array.isArray(props.items) && props.items.length > 0 ? props.items : []}
            /> : <BusinessSolutionDropdown
              items={Array.isArray(props.items) && props.items.length > 0 ? props.items : []}
            />}
          </>
        )}
      </div>
    </>
  )
}

export default NavBarItemDropdown