import React from 'react'

const Button = ({ name, handleClick, selectedProperty }) => {
    return (
        <button
          className={`rounded-full text-xs font-bold px-4 py-2 ${
            selectedProperty === name ? 'bg-[#3639E4] text-white' : 'bg-[#ECECFB] text-gray-700'
          }`}
          onClick={() => handleClick(name)}
        >
          {name}
        </button>
      );
}

export default Button