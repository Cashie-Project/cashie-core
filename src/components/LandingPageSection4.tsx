import CheckImage from '../assets/images/svg/check_24px.svg'
import HeroImage from '../assets/images/svg/undraw_taking-notes_4si1.svg'

const LandingPageSection4 = () => {
  return (
    <>
      <div className="w-full h-auto min-h-screen flex items-center justify-center p-[100px] gap-[100px]">
        <div className="w-full h-auto flex items-start justify-start relative">
          <div className='w-full h-screen min-w-[300px] max-w-[300px] bg-[#CDF5FD]'></div>
          <div className='w-full h-full p-[50px] absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
            <img
              src={HeroImage}
              alt='Hero image landing page 4'
              loading='lazy'
            />
          </div>
        </div>
        <div className="w-full h-auto flex flex-col items-start justify-start gap-[20px]">
          <p className='text-left font-roboto text-[36px] leading-[44px] text-[#000000] font-[700]'>
            Manajemen Stok
          </p>
          <p className='text-left font-roboto text-[24px] leading-[32px] text-[#000000]'>
            Kelola inventaris bisnis Anda dengan lebih efisien.
          </p>
          <div className="w-full h-auto flex flex-col items-start justify-start gap-[20px]">
            <div className='w-full h-auto flex items-center justify-start gap-[20px]'>
              <div className='w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] flex items-center justify-center rounded-full border-[1px]'>
                <img
                  src={CheckImage}
                  alt='Check icon'
                  loading='lazy'
                  className='w-full h-full min-w-[14px] max-w-[14px] min-h-[14px] max-h-[14px]'
                />
              </div>
              <p className='text-left font-roboto text-[22px] leading-[28px] text-[#000000]'>
                Pantau jumlah stok barang secara langsung untuk memastikan data yang akurat dan terkini.
              </p>
            </div>
            <div className='w-full h-auto flex items-center justify-start gap-[20px]'>
              <div className='w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] flex items-center justify-center rounded-full border-[1px]'>
                <img
                  src={CheckImage}
                  alt='Check icon'
                  loading='lazy'
                  className='w-full h-full min-w-[14px] max-w-[14px] min-h-[14px] max-h-[14px]'
                />
              </div>
              <p className='text-left font-roboto text-[22px] leading-[28px] text-[#000000]'>
                Tetapkan batasan stok minimum dan maksimum untuk mencegah kehabisan atau kelebihan stok.
              </p>
            </div>
            <div className='w-full h-auto flex items-center justify-start gap-[20px]'>
              <div className='w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] flex items-center justify-center rounded-full border-[1px]'>
                <img
                  src={CheckImage}
                  alt='Check icon'
                  loading='lazy'
                  className='w-full h-full min-w-[14px] max-w-[14px] min-h-[14px] max-h-[14px]'
                />
              </div>
              <p className='text-left font-roboto text-[22px] leading-[28px] text-[#000000]'>
                Perkirakan kebutuhan stok di masa mendatang berdasarkan tren penjualan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPageSection4
