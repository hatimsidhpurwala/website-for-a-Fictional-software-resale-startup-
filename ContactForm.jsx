import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const licenseTypes = [
    'Microsoft Office',
    'Adobe Creative Cloud',
    'Autodesk',
    'VMware',
    'Other'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.licenseType) newErrors.licenseType = 'License type is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', formData)
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: ''
        })
        
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000)
      }, 1500)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          
          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-lg">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="company" className="block mb-2 font-medium">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg"
                />
              </div>
              
              <div>
                <label htmlFor="licenseType" className="block mb-2 font-medium">License Type *</label>
                <select
                  id="licenseType"
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${errors.licenseType ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                >
                  <option value="">Select License Type</option>
                  {licenseTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
                {errors.licenseType && <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm