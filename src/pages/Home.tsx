import AppBar from "../components/AppBar"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"
import LandingPageSection1 from "../components/LandingPageSection1"
import LandingPageSection2 from "../components/LandingPageSection2"
import LandingPageSection3 from "../components/LandingPageSection3"
import LandingPageSection4 from "../components/LandingPageSection4"
import LandingPageSection5 from "../components/LandingPageSection5"

const Home = () => {
  return (
    <>
      <AppBar />
      <LandingPageSection1 />
      <LandingPageSection2 />
      <LandingPageSection3 />
      <LandingPageSection4 />
      <LandingPageSection5 />
      <Footer />
      <ContactUs />
    </>
  )
}

export default Home
