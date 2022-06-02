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
function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/part/:id' element={<Purchase></Purchase>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUP></SingUP>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
