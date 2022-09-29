import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
