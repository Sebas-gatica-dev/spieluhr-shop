import React from 'react'

export default function Header() {
  return (
    <div className="flex flex-col items-center bg-pink-300 py-6">
      <img className="size-18 w-40 h-40 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700" src="https://res.cloudinary.com/db4xypidq/image/upload/v1740047445/WhatsApp_Image_2025-02-19_at_12.57.17_AM_1_qyhr5r.jpg" alt="logo"/>
      <h2 className="text-white text-3xl my-4 font-bold">Spieluhr Tienda</h2>
      <p className="text-white text-xs sm:text-sm mx-10  md:text-lg">Objetos personalizados para regalar(te).  Con tu compra recibís un regalo sorpresa 🎁</p>
    </div>
  )
}
