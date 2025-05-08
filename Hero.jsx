import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Turn Your Unused Software Licenses Into Cash
          </h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            SoftSell helps businesses and individuals monetize their unused software licenses quickly and securely.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Sell My Licenses
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-colors">
              Get a Quote
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Software licenses" 
            className="rounded-xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero