import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { Home as Landing } from './components/layout/landing/Home.tsx'
import { Home as Shop } from './components/layout/shop/Home.tsx';
 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
            <Route index element={<Shop />} />
            <Route path="features" element={<ListKnowledge />}></Route>
            <Route path="projects" element={<ListProjects />}></Route>
            <Route path="contact" element={<Contact />}></Route>

            <Route path="landing">
              <Route index element={<Home />} />
              
            </Route>       
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
