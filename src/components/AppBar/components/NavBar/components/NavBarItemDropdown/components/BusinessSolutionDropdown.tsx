import { BusinessSolutionDropdownInterface } from "../../../../../../../models/business-solution-dropdown.interface";

const BusinessSolutionDropdown = (props: BusinessSolutionDropdownInterface) => {
  return (
    <>
      <div className="w-auto h-auto absolute top-[45px] left-[0px] bg-[#FFFFFF] rounded-[12px] shadow-md flex flex-col flex-nowrap items-start justify-start p-[25px] border-[1px] border-[#D9D9D9] overflow-hidden">
        {props.items.map((businessSolutionDropdownItem, businessSolutionDropdownIndex) => (
          <button
            key={businessSolutionDropdownIndex}
            type="button"
            className="w-full h-auto py-[10px] whitespace-nowrap text-left text-[16px] leading-[24px] text-[#000000] font-roboto font-[600] cursor-pointer"
          >
            {businessSolutionDropdownItem.labelText}
          </button>
        ))}
      </div>
    </>
  );
};

export default BusinessSolutionDropdown;
