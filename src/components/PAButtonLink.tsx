import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const PAButtonLink = ({lnk, to}:any) => {
  return (
    <Button variant='link' className='p-0'>
    <Link href={lnk} className='text-customWhite text-xl'>{to}</Link>
    </Button>
  )
}

export default PAButtonLink