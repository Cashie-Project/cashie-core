import { useEffect, useRef, useState } from 'react';
import InsertCommentIcon from '../../assets/images/svg/insert_comment_24px.svg'
import FormContactUs from './FormContactUs'

const ContactUs = () => {
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
    <div ref={wrapperRef} className="w-auto h-auto fixed bottom-[20px] right-[20px]">
      {isShowDropdown && <FormContactUs />}
      <button
        type="button"
        className="w-auto h-auto px-[20px] py-[10px] flex items-center justify-center gap-[10px] bg-[#00A9FF] rounded-l-[12px] rounded-br-[12px] cursor-pointer hover:bg-[#0087CC]"
        onClick={handleToggleDropdown}
      >
        <img
          src={InsertCommentIcon}
          alt='Insert comment icon'
          loading='lazy'
        />
        <p className="text-center font-roboto text-[16px] leading-[24px] text-[#FFFFFF] font-[600]">Hubungi Kami</p>
      </button>
    </div>
  )
}

export default ContactUs
