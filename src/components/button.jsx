import React from 'react'

const Button = ({ text }) => {
  return (
    <>
      <button className='text-white text-[16px] leading-[16px] fon-[400] rounded-[4px] w-[172px] h-[53px] btn'>
        {text}
      </button>
    </>
  )
}

export default Button