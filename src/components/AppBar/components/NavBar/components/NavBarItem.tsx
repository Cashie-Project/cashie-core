import { NavBarItemInterface } from "../../../../../models/navbar-item.interface";
import { useNavigate } from 'react-router-dom';

const NavBarItem = (props: NavBarItemInterface) => {
  const navigate = useNavigate();

  const handleRedirectPage = (pageUrl: string) => {
    navigate(pageUrl);
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
