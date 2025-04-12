import React from 'react'
import Link from 'next/link'

const vehicles = [
  {
    id: 1,
    title: '2020 Toyota Camry',
    description: 'Low miles, clean title, great condition',
    price: '$17,995',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 2,
    title: '2018 Honda Accord',
    description: 'Reliable, fuel efficient, one-owner',
    price: '$15,495',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 3,
    title: '2019 Ford Explorer',
    description: 'Spacious SUV, great for families',
    price: '$21,995',
    image: 'https://via.placeholder.com/300x200'
  }
]

export default function Home() {
  return (
    <main className='min-h-screen bg-gray-900 text-white'>
      <header className='p-6 bg-gray-800 shadow-md flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-bold'>TurnKey Auto</h1>
          <p className='text-gray-300'>High-quality used vehicles at great prices</p>
        </div>
        <nav className='space-x-4'>
          <Link href='/' className='text-white hover:underline'>Home</Link>
          <Link href='/inventory' className='text-white hover:underline'>Inventory</Link>
          <a href='#contact' className='text-white hover:underline'>Contact</a>
        </nav>
      </header>

      <section className='p-6'>
        <h2 className='text-2xl font-semibold mb-4'>Featured Vehicles</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {vehicles.slice(0, 3).map((car) => (
            <div key={car.id} className='bg-gray-800 p-4 rounded'>
              <img src={car.image} alt={car.title} className='mb-2 rounded' />
              <h3 className='text-xl font-semibold'>{car.title}</h3>
              <p className='text-gray-400'>{car.description}</p>
              <p className='mt-2 font-bold text-lg'>{car.price}</p>
            </div>
          ))}
        </div>
        <div className='mt-6'>
          <Link href='/inventory'>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'>View Full Inventory</button>
          </Link>
        </div>
      </section>

      <section id='contact' className='p-6 bg-gray-800'>
        <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
        <form className='grid grid-cols-1 gap-4 max-w-xl'>
          <input type='text' placeholder='Name' className='p-2 rounded bg-gray-700 text-white' />
          <input type='email' placeholder='Email' className='p-2 rounded bg-gray-700 text-white' />
          <textarea placeholder='Your Message' className='p-2 rounded bg-gray-700 text-white'></textarea>
          <button className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white'>Send Inquiry</button>
        </form>
      </section>

      <footer className='p-6 bg-gray-900 text-center text-sm text-gray-500'>
        &copy; {new Date().getFullYear()} TurnKey Auto. All rights reserved.
      </footer>
    </main>
  )
}
