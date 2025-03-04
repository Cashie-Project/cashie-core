import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { PAGE_BLOG, PAGE_FAQ, PAGE_HOME, PAGE_PRIVACY_POLICY } from './utils/constants/page.constants';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';

const App = () => {
  return (
    <Routes>  
      <Route index path={PAGE_HOME} element={<Home />} />
      <Route path={PAGE_PRIVACY_POLICY} element={<PrivacyPolicy />} />
      <Route path={PAGE_BLOG} element={<Blog />} />
      <Route path={PAGE_FAQ} element={<FAQ />} />
    </Routes>
  )
}

export default App;
