import React from 'react'

interface stackType {
    title: string;
  }

const TechStackItem = ({title}:stackType) => {
  return (
    <div className='flex flex-col w-24 h-36 justify-between items-center text-2xl'>
        <div className='w-24 h-24 bg-customBlack'></div>
        <span>{title}</span>
    </div>
  )
}

export default TechStackItem