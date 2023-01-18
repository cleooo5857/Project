import Layout from 'components/Layout';
import Test from 'pages';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
         <Route path={'/'} element={<Test/>} />
         <Route path={'/Yearly-Goals'} element={<Test/>} />
         <Route path={'/Memo'} element={<Test/>} />
         <Route path={'/Blog'} element={<Test/>} />
         <Route path={'/Resume'} element={<Test/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
