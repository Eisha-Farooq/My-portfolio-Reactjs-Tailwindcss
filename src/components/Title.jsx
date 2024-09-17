import React from 'react'

const Title = ({title,des}) => {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-4xl md:text-5xl text-gray-300 font-bold capitalize'>
            {title}
        </h1>
        <h3 className='text-sm uppercase font-light text-red-700 tracking-wide'>
            {des}
        </h3>
        
    </div>
  )
}

export default Title