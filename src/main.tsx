import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import  Landing from './components/layout/landing/Landing.tsx'
import  Shop  from './components/layout/shop/Shop.tsx';
import Cart from './components/cart/Cart.tsx';
 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
            <Route index element={<Shop />} />
            {/* <Route path="features" element={<ListKnowledge />}></Route>
            <Route path="projects" element={<ListProjects />}></Route>
            <Route path="contact" element={<Contact />}></Route> */}
            <Route path="cart" element={<Cart/>}></Route>
               
        </Route>
        <Route path="/landing">
              <Route index element={<Landing />} />
        </Route>   
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
