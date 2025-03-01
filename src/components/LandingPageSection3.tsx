import CheckImage from '../assets/images/svg/check_24px.svg'
import HeroImage from '../assets/images/svg/undraw_business-deal_nx2n.svg'

const LandingPageSection3 = () => {
  return (
    <>
      <div className="w-full h-auto min-h-screen flex items-center justify-center p-[100px] gap-[100px]">
        <div className="w-full h-auto flex flex-col items-start justify-start gap-[20px]">
          <p className='text-left font-roboto text-[36px] leading-[44px] text-[#000000] font-[700]'>
            Manajemen Pelanggan
          </p>
          <p className='text-left font-roboto text-[24px] leading-[32px] text-[#000000]'>
            Bangun hubungan bisnis yang lebih baik dengan pelanggan dan tingkatkan pengalaman mereka.
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
                Kumpulkan umpan balik dari pelanggan terkait produk atau layanan yang diberikan.
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
                Catat riwayat transaksi pelanggan untuk memberikan penawaran atau rekomendasi yang lebih personal.
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
                Analisa perilaku pelanggan, tren penjualan, dan efektivitas strategi pemasaran untuk meningkatkan pengalaman pelanggan.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex items-start justify-end relative">
          <div className='w-full h-screen min-w-[300px] max-w-[300px] bg-[#CDF5FD]'></div>
          <div className='w-full h-full p-[50px] absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
            <img 
              src={HeroImage}
              alt='Hero image landing page 3'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPageSection3
