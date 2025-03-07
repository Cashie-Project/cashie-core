import { ServiceDropdownInterface } from "../../../../../../../models/service-dropdown.interface";

const ServiceDropdown = (props: ServiceDropdownInterface) => {
  return (
    <>
      <div className="w-auto h-auto absolute top-[45px] left-[20px] bg-[#FFFFFF] rounded-[12px] shadow-md flex items-start justify-start py-[25px] flex-nowrap border-[1px] border-[#D9D9D9] overflow-hidden">
        {props.items.map((serviceGroupItem, serviceGroupIndex) => (
          <>
            <div key={serviceGroupIndex} className={`w-full h-auto flex flex-col items-start justify-start gap-[25px] flex-nowrap px-[25px] ${serviceGroupItem.value == 'jualan_offline' ? 'border-r-[1px] border-[#D9D9D9]' : ''}`}>
              <div className="w-full h-auto">
                <p className="text-left text-[16px] leading-[24px] text-[#5D5D5D] font-roboto font-[600] whitespace-nowrap">
                  {serviceGroupItem.labelText}
                </p>
              </div>
              <div className="w-full h-auto flex flex-col items-start justify-start">
                {serviceGroupItem.items?.map((serviceDropdownItemPerGroup, serviceDropdownItemPerGroupIndex) => (
                  <button
                    key={serviceDropdownItemPerGroupIndex}
                    type="button"
                    className="w-full h-auto py-[10px] whitespace-nowrap text-left text-[16px] leading-[24px] text-[#000000] font-roboto font-[600] cursor-pointer"
                  >
                    {serviceDropdownItemPerGroup.labelText} 
                  </button>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ServiceDropdown;
