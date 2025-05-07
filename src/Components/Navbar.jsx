function Navbar() {
    return (
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full z-50">
        <div className="text-2xl font-bold">MyPortfolio</div>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    );
  }
  export default Navbar;
  