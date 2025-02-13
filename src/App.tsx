import { Route, Routes } from 'react-router-dom';

import Main from './layout/Main/Main';
import Auth from './layout/Auth/Auth';
import Dashboard from './layout/Dashboard/DashboardLayout';

import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';

import Home from './pages/Home/Home';
import FindJob from './pages/FindJob/FindJob';
import JobDetail from './pages/JobDetail/JobDetail';
import DashboardPage from './pages/Dashboard/Dashboard';
import FindEmployers from './pages/FindEmployers/FindEmployers';
import EmployersDetail from './pages/EmployersDetail/EmployersDetail';
import ForgotPassword from './pages/Auth/ForgetPassword/ForgetPassword';
import EmailVerification from './pages/Auth/Verification/EmailVerification';
import AccountSetup from './pages/AccountSetup/AccountSetup';
import FinishedInfo from './pages/AccountSetup/Components/FinishedInfo';
import Blog from './pages/Blog/Blog';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import NotFound from './pages/NotFount/NotFound';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Faqs from './pages/Faqs/Faqs';
import Filter from './components/Filter/Filter';

const App = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route element={<Auth />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
        </Route>

        {/* Private Routes */}
        <Route element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/find-job" element={<FindJob />} />
          <Route path="/find-job/detail" element={<JobDetail />} />
          <Route path="/find-employers" element={<FindEmployers />} />
          <Route path="/find-employers/detail" element={<EmployersDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/detail" element={<BlogDetail />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/FAQs" element={<Faqs />} />
        </Route>
        <Route path="/account-setup" element={<AccountSetup />} />
        <Route path="/account-setup/messege" element={<FinishedInfo />} />
        <Route path="/filter" element={<Filter />} />
        <Route element={<Dashboard />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/:name" element={<DashboardPage />} />
        </Route>
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default App;
