import { FaUpload, FaSearchDollar, FaMoneyBillWave } from 'react-icons/fa'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: <FaUpload className="text-4xl mb-4 text-blue-600" />,
    title: "Upload License",
    description: "Provide details about your software license through our secure platform."
  },
  {
    icon: <FaSearchDollar className="text-4xl mb-4 text-blue-600" />,
    title: "Get Valuation",
    description: "We'll analyze your license and provide a fair market valuation within 24 hours."
  },
  {
    icon: <FaMoneyBillWave className="text-4xl mb-4 text-blue-600" />,
    title: "Get Paid",
    description: "Accept our offer and receive payment directly to your bank account."
  }
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-100 dark:bg-gray-800 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {step.icon}
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks