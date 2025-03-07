import LogoBlackImage from '../../../assets/images/png/logo_black.png'
import { PAGE_HOME } from '../../../utils/constants/page.constants'
import { useHistory } from 'react-router-dom'

const AppLogo = () => {
  const history = useHistory();

  const handleNavigateToHomePage = () => {
    history.push(PAGE_HOME);
  };

  return (
    <>
      <button
        type='button'
        className='w-auto h-auto px-[20px] py-[10px] cursor-pointer'
        onClick={handleNavigateToHomePage}
      >
        <img
          src={LogoBlackImage}
          alt='Logo black'
          loading='lazy'
          className='w-full h-full min-w-[68px] max-w-[68px] min-h-[28px] max-h-[28px] object-cover object-center'
        />
      </button>
    </>
  )
}

export default AppLogo