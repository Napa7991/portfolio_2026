
const Header1 = () => {
  return (
    // Using Header semantics
    <header className = "flex items-center justify-between bg-gray-600 px-10 py-3 text-white">
        <div className = "flex items-center gap-2 text-2xl font-bold">
            <span>Logo</span>
            <span>Brooklyn</span>
        </div>

        {/* using Navbar */}
        <nav className="flex gap-8 text-lg">
            <a href="#home" className ="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#projects" className="hover:text-gray-300">Projects</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>
    </header>
  )
}

export default Header1