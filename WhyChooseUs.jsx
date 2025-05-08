import { FaShieldAlt, FaClock, FaPercentage, FaHeadset } from 'react-icons/fa'
import { motion } from 'framer-motion'

const benefits = [
  {
    icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    title: "Secure Transactions",
    description: "Bank-level encryption protects your data and financial information."
  },
  {
    icon: <FaClock className="text-3xl text-blue-600" />,
    title: "Fast Payouts",
    description: "Receive payment within 48 hours of accepting our offer."
  },
  {
    icon: <FaPercentage className="text-3xl text-blue-600" />,
    title: "Competitive Rates",
    description: "We offer the best market rates for your software licenses."
  },
  {
    icon: <FaHeadset className="text-3xl text-blue-600" />,
    title: "Dedicated Support",
    description: "Our team is available to assist you throughout the process."
  }
]

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose SoftSell?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                {benefit.icon}
                <h3 className="text-xl font-semibold ml-4">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs