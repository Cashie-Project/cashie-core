import { ChangeEvent, FormEvent, useState } from 'react';
import ClearIcon from '../../assets/images/svg/clear_24px.svg';
import { FormData } from '../../models/form-contact-us.interface';

const FormContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit: ', formData);
    setFormData({
      name: '',
      email: '',
      phoneNumber: ''
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form
      className="w-full h-auto flex flex-col min-w-[400px] max-w-[400px] rounded-[12px] absolute bottom-[65px] right-[0px] bg-[#FFFFFF] shadow-lg overflow-hidden"
      onSubmit={handleSubmit}
    >
      <div className="w-full h-auto flex items-center justify-between gap-[20px] bg-[#00A9FF] px-[20px] py-[10px]">
        <p className="text-left text-[16px] leading-[24px] text-[#FFFFFF] font-[600]">
          Mulai percakapan dengan kami
        </p>
        <button
          type="button"
          className='w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] flex items-center justify-center cursor-pointer'
        >
          <img
            src={ClearIcon}
            alt='Clear icon'
            loading='lazy'
            className='w-full h-full min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]'
          />
        </button>
      </div>
      <div className="w-full h-auto flex flex-col items-start justify-start p-[20px] gap-[20px]">
        <div className='w-full h-auto'>
          <p className='text-left text-[14px] leading-[20px] text-[#5D5D5D] font-[600]'>
            Harap lengkapi informasi kontak Anda untuk memulai percakapan dengan kami.
          </p>
        </div>
        <div className='w-full h-auto flex flex-col items-start justify-start gap-[10px]'>
          <div className='w-full h-auto flex flex-col items-start justify-start gap-[5px]'>
            <label htmlFor="name" className='text-left text-[14px] leading-[20px] text-[#000000]'>Nama <span className='text-[#FF0202]'>*</span></label>
            <input
              id='name'
              name='name'
              type='text'
              className='w-full h-auto px-[20px] py-[10px] border-[1px] border-[#D9D9D9] rounded-[6px] text-[12px] leading-[16px] text-[#000000]'
              placeholder='Nama Anda...'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='w-full h-auto flex flex-col items-start justify-start gap-[5px]'>
            <label htmlFor="email" className='text-left text-[14px] leading-[20px] text-[#000000]'>Email <span className='text-[#FF0202]'>*</span></label>
            <input
              id='email'
              name='email'
              type='text'
              className='w-full h-auto px-[20px] py-[10px] border-[1px] border-[#D9D9D9] rounded-[6px] text-[12px] leading-[16px] text-[#000000]'
              placeholder='Email Anda...'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='w-full h-auto flex flex-col items-start justify-start gap-[5px]'>
            <label htmlFor="phoneNumber" className='text-left text-[14px] leading-[20px] text-[#000000]'>Nomor HP / Whatsapp <span className='text-[#FF0202]'>*</span></label>
            <input
              id='phoneNumber'
              name='phoneNumber'
              type='text'
              className='w-full h-auto px-[20px] py-[10px] border-[1px] border-[#D9D9D9] rounded-[6px] text-[12px] leading-[16px] text-[#000000]'
              placeholder='Nomor HP / Whatsapp Anda...'
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='w-full h-auto'>
          <button
            type='submit'
            className='w-full h-auto px-[20px] py-[10px] bg-[#00A9FF] rounded-[6px] text-center text-[14px] leading-[20px] text-[#FFFFFF] font-[600] cursor-pointer hover:bg-[#0087CC]'
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default FormContactUs
