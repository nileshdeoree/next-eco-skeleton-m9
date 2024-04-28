import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='bg-violet-400 flex'>

            <Link href={'/'}>Navbar</Link>

            <div className="mx-2">
                <Link href={'/productlist'}>Product List</Link>
            </div>
    
        </div>
    )
}

export default Navbar