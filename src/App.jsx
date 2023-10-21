 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Products from './components/Products';
import Cart from './components/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import SingUp from './pages/SingUp';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
     <Header/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/singup' element={<SingUp/>}/>
      </Routes>
    </BrowserRouter>
  
     
    </>
  )
}

export default App
