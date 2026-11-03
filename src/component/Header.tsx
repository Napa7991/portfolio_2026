
const Header = () => {
  return (
    <>
      <div className="flex bg-gray-600 text-white text-2xl justify-around px-4 py-3 justify-between">
        <div className="pl-10 logo flex items-center gap-2">
          <span>Logo</span>
          <h2>Brooklyn</h2>
        </div>
        <div className="headers flex justify-end  gap-8 px-10">
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      </div>
    </>

  )
}

export default Header