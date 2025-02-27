import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
// En tu componente principal
import WhatsAppButton from '../../buttons/WhatsapButton';
import { products } from '../../../resources/products';

// Dentro del return


export default function Shop() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (term: string) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };



  return (
    <div className="h-screen flex flex-col w-full h-full">
        <Header />
        <div className="w-full h-full  bg-red-300">
            <div className="flex justify-center">
                <div className=" text-red mt-4 mb-2">
                      <h2>¡Bienvenidos a Spieluhr!</h2>
                      <span>Productos totalmente personalizados para regalar(te)</span>
                      <Link className="p-2"  to="products/?category=destacados">
                        Productos destacados
                      </Link>   
                </div>
            </div>
          <div className="w-full  bg-red-300">
          </div>
        </div>
        <WhatsAppButton 
          phoneNumber="5491122334455" 
          message="Hola, quiero hacer una consulta sobre sus productos" 
        />
       <Footer />
    </div>
  )
}
