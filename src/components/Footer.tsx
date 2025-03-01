import AppLogo from "./AppBar/components/AppLogo"

const Footer = () => {
  return (
    <>
      <div className="w-full h-full px-[100px] py-[100px] bg-[#CDF5FD] flex flex-col items-start justify-start gap-[50px]">
        <div className="w-full h-auto flex items-start justify-start gap-[100px]">
          <div className="w-auto h-auto">
            <AppLogo />
          </div>
          <div className="w-auto h-auto flex flex-col items-start justify-start">
            <div className="w-full h-auto">
              <p className="text-left text-[32px] leading-[40px] font-roboto text-[000000] font-[700]">
                Layanan
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#000000]"></div>
        <div className="w-full h-auto">
          <p>Copyright</p>
        </div>
      </div>
    </>
  )
}

export default Footer