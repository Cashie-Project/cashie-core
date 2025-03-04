import { useEffect, useRef, useState } from 'react';
import { LanguageDataItem } from '../../../../../models/switch-language.interface';
import ExpandMoreIcon from '../../../../../assets/images/svg/expand_more_24px.svg';

const SwitchLanguage = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [languageList, setLanguageList] = useState<LanguageDataItem[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageDataItem>({
    labelText: 'Indonesia',
    value: 'ID'
  });

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setLanguageList([
      {
        labelText: 'Indonesia',
        value: 'ID'
      },
      {
        labelText: 'English',
        value: 'EN'
      },
    ])
  }, []);

  const handleToggleDropdown = () => {
    setIsShowDropdown(!isShowDropdown);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (wrapperRef.current && !wrapperRef.current.contains(target)) {
      setIsShowDropdown(false);
    }
  };

  const handleSelectLanguage = (data: LanguageDataItem) => {
    setSelectedLanguage(data);
    setIsShowDropdown(false);
  };

  return (
    <>
      <div ref={wrapperRef} className="w-auto h-auto relative">
        <button
          type="button"
          className="w-auto h-auto flex items-center justify-center text-[16px] leading-[24px] font-[700] cursor-pointer gap-[10px]"
          onClick={handleToggleDropdown}
        >
          <div className="w-auto h-auto flex items-center justify-center gap-[5px]">
            <span className={selectedLanguage.value == 'ID' ? 'text-[#000000]' : 'text-[#D9D9D9]'}>ID</span>
            <span>|</span>
            <span className={selectedLanguage.value == 'EN' ? 'text-[#000000]' : 'text-[#D9D9D9]'}>EN</span>
          </div>
          <img
            src={ExpandMoreIcon}
            alt="Expand more icon"
            loading="lazy"
            className={`w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] transition-all ${isShowDropdown ? 'rotate-180' : ''}`}
          />
        </button>
        
        {isShowDropdown && (
          <div className="w-auto h-auto absolute top-[45px] right-[0px] bg-[#FFFFFF] rounded-[12px] shadow-md border-[1px] border-[#D9D9D9] flex flex-col items-start justify-start overflow-hidden">
            {languageList.map((languageItem: LanguageDataItem) => (
              <button
                type="button"
                className={`w-full h-auto px-[20px] py-[10px] text-left text-[16px] leading-[24px] text-[#000000] font-[600] cursor-pointer border-b-[1px] border-[#D9D9D9] ${languageItem.value == selectedLanguage.value ? 'bg-[#EEEEEE]' : 'bg-[#FFFFFF]'}`}
                onClick={() => handleSelectLanguage(languageItem)}
              >
                {languageItem.labelText}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default SwitchLanguage
