import Layout from 'components/Layout';
import Test from 'pages';
import BlogDetail from 'pages/blog/Detail/blogdetail';
import BlogList from 'pages/blog/List/BlogList';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path={'/'} element={<Test/>} />
          <Route path={'/Yearly-Goals'} element={<Test/>} />
          <Route path={'/Memo'} element={<Test/>} />
          <Route path={'/Blog'} element={<BlogList/>} />
          <Route path={'/Blog'} element={<BlogList/>} />
          <Route path={'/Blog/:title'} element={<BlogDetail/>} />
          <Route path={'/Resume'} element={<Test/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
