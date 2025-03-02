import LoginButton from "./LoginButton"
import SwitchLanguage from "./SwitchLanguage"

const AdditionalButton = () => {
  return (
    <>
      <div className="w-auto h-auto flex items-center justify-center gap-[20px]">
        <LoginButton />
        <SwitchLanguage />
      </div>
    </>
  )
}

export default AdditionalButton