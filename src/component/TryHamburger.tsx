import React, { useState } from 'react';
const Header: React.FC = () => {
    // Tracks if the mobile dropdown menu is open or closed
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <header className="flex items-center justify-between bg-gray-600 px-10 py-3 text-white">
                {/*red Desktop logo */}
                <div className="flex items-center gap-2 text-2xl font-bold">
                    <span>Logo</span>
                    <span>Brooklyn</span>
                </div>
                {/*red Desktop navigation */}
                <nav className='hidden gap-8 text-lg md:flex'>
                    <a href="#home" className="transition-colors hover:text-gray-300">Home</a>
                    <a href="#about" className="transition-colors hover:text-gray-300">About</a>
                    <a href="#projects" className="transition-colors hover:text-gray-300">Projects</a>
                    <a href="#contact" className="transition-colors hover:text-gray-300">Contact</a>
                </nav>
                {/*red Mobile Hamburgur / Close button (only visible on mobile screen) */}
                <button 
                onClick={()=>setIsOpen((prev)=>!prev)}
                className="text-3xl focus:outline-none md:hidden"
                aria-label = "Toggle Navigation"
                type="button"
                    >
                    {isOpen ? '✕' : '☰'}
                </button>
            </header>




        </>
    )


}





export default Header