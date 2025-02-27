import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { products } from '../../../resources/products';
import { Link } from 'react-router-dom';

export default function Landing() {
  // https://wa.me/+541122857634  whatsap url

  const firstSixProducts = products.slice(0, 6);

  console.log(firstSixProducts)

 const [isOpen, setIsOpen] = useState(false);


  const toggleDropdown = () => {
      setIsOpen(!isOpen);
  }



  return (
    <div className="h-dvh flex flex-col w-full h-full bg-pink-200"> 
      <Header />
      <div className="flex justify-center items-center h-20 gap-4 my-6">
        <a href="" target="_blank" className="flex justify-center items-center text-white text-2xl w-16 h-16 bg-fuchsia-400 hover:bg-fuchsia-500 rounded-full cursor-pointer">
            <i className="fa-brands fa-instagram"></i> 
        </a>
        <a href="" target="_blank" className="flex justify-center items-center text-white text-2xl w-16 h-16 bg-fuchsia-400 hover:bg-fuchsia-500 rounded-full cursor-pointer">
            <i className="fa-solid fa-envelope"></i> 
        </a>
        <a href="https://wa.me/+541122857634" target="_blank" className="flex justify-center items-center text-white text-2xl w-16 h-16 bg-fuchsia-400 hover:bg-fuchsia-500 rounded-full cursor-pointer">
            <i className="fa-brands fa-whatsapp"></i> 
        </a>
      </div>


      <div className="flex justify-center items-center mx-6 px-2 py-2">

      <div className="flex  h-20 w-2xl justify-between bg-white rounded-md">

          <div className="flex p-2   items-center">

          <Link to="/" className="flex justify-center items-center p-2 text-white text-2xl w-16 h-16 bg-fuchsia-400 hover:bg-fuchsia-500 rounded-full py-1 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </Link>

          <span className="ml-2 text-xl font-medium">
             Ir a la tienda
          </span>


          </div>
          <div className="flex items-center p-2 mt-1 text-fuchsia-400 hover:text-fuchsia-500 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
          </div>

          </div>

      </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-16 mt-6 mb-6">
          {firstSixProducts.map((product) => (
            <div
              key={product.id} // Asegúrate de usar una clave única para cada producto
              className="flex flex-col justify-center items-center bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {/* Imagen */}
              <div className="w-full h-32 flex justify-center items-center bg-gray-100">
                <img
                  src={product.img}
                  alt={product.description}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Título */}
              <div className="mt-2 text-center px-2">
                <h3 className="text-base font-medium text-gray-700">{product.name}</h3>
              </div>

              {/* Precio */}
              <div className="mb-2 text-center">
                <span className="text-lg font-semibold text-green-600">${product.price}</span>
              </div>
            </div>
          ))}
        </div>

      {/* <div className="flex justify-center relative items-center mx-6 px-2 py-2">
        <div className="flex  h-20 w-2xl justify-between bg-pink-300 rounded-md">


            <span className="flex items-center ml-2 text-white text-xl font-medium">
               Enviar dinero
            </span>

 

          <button
           onClick={() => setIsOpen(!isOpen)}
           className="flex justify-center items-center p-2 pt-4 text-white text-2xl w-16 h-16  rounded-full py-1 cursor-pointer">
            <span className={`relative flex items-center justify-center duration-300 ease-out ${
                  isOpen ? 'rotate-180' : ''
                }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
            </span>
            
          </button>

        </div>

        {isOpen && (
        <div className={`absolute top-0 left-0  opacity-0
        ${isOpen ? 'opacity-100' : ''}
        ease duration-500`}>

          Desplegable

        </div>
      )}
      </div> */}
    





      <Footer />
    </div>
  )
}
