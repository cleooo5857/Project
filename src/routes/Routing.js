import Layout from 'components/Layout';
import Test from 'pages';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
         
        <Route element={<Layout/>}>
         <Route path={'/'} element={<Test/>} />
         <Route path={'/test1'} element={<Test/>} />
         <Route path={'/test2'} element={<Test/>} />
         <Route path={'/test3'} element={<Test/>} />
         <Route path={'/test4'} element={<Test/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
