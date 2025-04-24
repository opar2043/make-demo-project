import React from 'react'

const ClientCard = ({ cli }) => {
  return (
    <div className="bg-white shadow-md p-4 hover:shadow-lg transition-shadow duration-300">

      <div className="">
        <div className="flex-shrink-0">
          <img
            src={cli.image}
            alt={cli.name}
            className="w-16 h-16 object-fill border-2 border-gray-200"
          />
        </div>
      </div>
      <p className="text-lg font-semibold text-gray-800 mb-2">{cli.name}</p>
    </div>
  )
}

export default ClientCard
