import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">SoftSell</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#how-it-works" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">How It Works</a>
          <a href="#why-choose-us" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Why Choose Us</a>
          <a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
        </div>
        
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar