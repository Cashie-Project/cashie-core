import InsertCommentIcon from '../../assets/images/svg/insert_comment_24px.svg'

const ContactUs = () => {
  return (
    <>
      <div className="w-auto h-auto fixed bottom-[20px] right-[20px]">
        <button
          type="button"
          className="w-auto h-auto px-[20px] py-[10px] flex items-center justify-center gap-[10px] bg-[#00A9FF] rounded-l-[12px] rounded-br-[12px] cursor-pointer hover:opacity-80"
        >
          <img 
            src={InsertCommentIcon}
            alt='Insert comment icon'
            loading='lazy'
          />
          <p className="text-center font-roboto text-[16px] leading-[24px] text-[#FFFFFF]">Hubungi Kami</p>
        </button>
      </div>
    </>
  )
}

export default ContactUs
