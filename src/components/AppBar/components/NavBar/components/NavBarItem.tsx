import { useHistory } from "react-router-dom";
import { NavBarItemInterface } from "../../../../../models/navbar-item.interface";

const NavBarItem = (props: NavBarItemInterface) => {
  const history = useHistory();

  const handleRedirectPage = (pageUrl: string) => {
    history.push(pageUrl);
  };

  return (
    <>
      <button
        type="button"
        className="w-auto h-auto px-[20px] py-[10px] font-roboto text-[16px] leading-[24px] text-[#000000] bg-[#FFFFFF] cursor-pointer font-[600]"
        onClick={() => handleRedirectPage(props.pageUrl)}
      >
        {props.labelText}
      </button>
    </>
  )
}

export default NavBarItem 
