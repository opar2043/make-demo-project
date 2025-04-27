import React from 'react'

const Title = ({ text }) => {
  return (
    <div className="py-4 md:py-6  md:my-6">
      <div className="flex items-center justify-center gap-4">
        {/* Left Line */}
        <div className="h-1 mt-2 w-12 md:w-20  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>

        {/* Title Text */}
        <h2 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          {text}
        </h2>

        {/* Right Line */}
        <div className="h-1 mt-2 md:w-20 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
      </div>
    </div>
  )
}

export default Title

