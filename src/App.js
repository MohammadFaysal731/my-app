import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Purchase from './components/Purchase/Purchase';
import SingUP from './components/SingUp/SingUP';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import MyProfile from './components/Dashboard/MyProfile/MyProfile';
import MyOrder from './components/Dashboard/MyOrder/MyOrder';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import AddProduct from './components/Dashboard/AddProduct/AddProduct';
function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/part/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}>
        </Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='myorder' element={<MyOrder></MyOrder>}></Route>
          <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUP></SingUP>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
