import React from 'react'

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

export default function Inventory() {
  return (
    <main className='min-h-screen bg-gray-900 text-white p-6'>
      <h1 className='text-3xl font-bold mb-6'>Inventory</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {vehicles.map((car) => (
          <div key={car.id} className='bg-gray-800 p-4 rounded'>
            <img src={car.image} alt={car.title} className='mb-2 rounded' />
            <h3 className='text-xl font-semibold'>{car.title}</h3>
            <p className='text-gray-400'>{car.description}</p>
            <p className='mt-2 font-bold text-lg'>{car.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
