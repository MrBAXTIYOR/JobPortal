import { Outlet } from 'react-router-dom';
import Header from '../Main/Header/Header';

const Dashboard = () => {
  return (
    <>
      <Header />
      
      <Outlet />
    </>
  );
};

export default Dashboard;
