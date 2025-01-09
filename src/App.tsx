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
        </Route>

        <Route element={<Dashboard />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
