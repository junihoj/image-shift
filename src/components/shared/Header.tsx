import React from 'react'

interface IHeader {
    title: string;
    subtitle?: string;
}
const Header: React.FC<IHeader> = ({ subtitle, title }) => {
    return (
        <>
            <h2 className='h2-bold text-dark-600'>{title}</h2>
            {subtitle && <p className="p-16 mt-4">{subtitle}</p>}
        </>
    )
}

export default Header