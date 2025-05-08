import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "SoftSell made selling our unused Microsoft licenses incredibly easy. We received payment within 2 days!",
    name: "Sarah Johnson",
    role: "IT Director",
    company: "TechForward Inc."
  },
  {
    quote: "I was skeptical at first, but SoftSell offered me 30% more than other resellers for my Adobe licenses.",
    name: "Michael Chen",
    role: "Creative Director",
    company: "PixelPerfect Studios"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-800 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials