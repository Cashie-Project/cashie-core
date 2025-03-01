import HeroImageLandingPage1 from '../assets/images/svg/undraw_predictive-analytics_6vi1.svg'

const LandingPageSection1 = () => {
  return (
    <>
      <div className="w-full h-auto min-h-screen flex items-center justify-center p-[100px] gap-[100px]">
        <div className="w-full h-auto flex flex-col items-start justify-start gap-[50px]">
          <div className="w-full h-auto flex flex-col items-start justify-start gap-[20px]">
            <p className="text-left font-roboto text-[36px] leading-[44px] text-[#000000] font-[700]">
              Segala informasi mengenai bisnis/toko ada di bawah kendali Anda.
            </p>
            <p className="text-left font-roboto text-[24px] leading-[32px] text-[#000000]">
              Sistem aplikasi kasir online berbasis cloud yang dapat mengoptimalkan potensi bisnis Anda, baik secara online maupun offline.
            </p>
          </div>
          <div className="w-full h-auto">
            <button
              type="button"
              className="w-full h-auto px-[40px] py-[20px] rounded-full bg-[#00A9FF] cursor-pointer text-center font-roboto text-[22px] leading-[28px] font-[800] text-[#FFFFFF]"
            >
              Mulai Sekarang
            </button>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden relative flex items-start justify-end">
          <div className='w-full h-screen min-w-[300px] max-w-[300px] bg-[#CDF5FD]'></div>
          <div className='p-[50px] absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
            <img
              src={HeroImageLandingPage1}
              alt='Hero image landing page 1'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPageSection1
