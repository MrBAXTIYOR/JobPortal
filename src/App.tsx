import { Route, Routes } from 'react-router-dom';
import Main from './layout/Main/Main';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
