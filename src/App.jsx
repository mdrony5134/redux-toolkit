 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  
  return (
    <>
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  
     
    </>
  )
}

export default App
