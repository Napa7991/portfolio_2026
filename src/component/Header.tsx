import React, { useState } from 'react';
const Header: React.FC = () => {
    // Tracks if the mobile dropdown menu is open or closed
    const [isOpen, setIsOpen] = useState<boolean>(false)

    //red Helper function to close the mobile menu when a user taps any link
    /**
      * 📌 [Sticky Note: handleLinkClick]
      * ----------------------------------------------------
      * • Purpose: Closes the mobile navigation dropdown menu.
      * • Action: Sets the `isOpen` state to `false`.
      * • Trigger: Fired automatically whenever a user taps a mobile link.
      */
    const handleLinkClick = (): void => {
        setIsOpen(false)
    }

    return (
        <>
            <header className="bg-gray-600 text-white shadow-md">
                {/*red Main Header bar or div */}
                <div className="flex items-center justify-between px-6 py-4 md:px-10">
                    {/*red Logo Section */}
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
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="text-3xl focus:outline-none md:hidden"
                        aria-label="Toggle Navigation"
                        type="button"
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/*red Mobile dropdown Menu(renders only when isOpen is true on mobile) */}
                {isOpen && (
                    <nav className="flex flex-col gap-4 border-t border-gray-500 bg-gray-700 px-6 py-4 text-lg md:hid">
                        <a href="#home" onClick={handleLinkClick} className='transition-colors hover:text-gray-300'>Home</a>
                        <a href="#about" onClick={handleLinkClick} className='transition-colors hover:text-gray-300'>About</a>
                        <a href="#projects" onClick={handleLinkClick} className='transition-colors hover:text-gray-300'>Projects</a>
                        <a href="#contact" onClick={handleLinkClick} className='transition-colors hover:text-gray-300'>Contact</a>

                    </nav>
                )}
            </header>

        </>
    )


}





export default Header