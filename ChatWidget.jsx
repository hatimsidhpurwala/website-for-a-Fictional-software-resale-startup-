import { useState, useRef, useEffect } from 'react'
import { FaTimes, FaPaperPlane } from 'react-icons/fa'

const ChatWidget = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your SoftSell assistant. How can I help you today?", sender: 'bot' }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const exampleQuestions = [
    "How do I sell my license?",
    "What licenses do you accept?",
    "How long does the process take?"
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault()
    
    if (!inputValue.trim()) return
    
    // Add user message
    const userMessage = { text: inputValue, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    
    // Simulate bot response
    setIsTyping(true)
    setTimeout(() => {
      const botResponses = {
        "How do I sell my license?": "You can start by clicking the 'Sell My Licenses' button on our homepage. Then you'll need to provide details about your license, and we'll give you a valuation within 24 hours.",
        "What licenses do you accept?": "We accept most major software licenses including Microsoft, Adobe, Autodesk, VMware, and many others. If you're unsure about a specific license, feel free to ask!",
        "How long does the process take?": "Typically, the entire process takes 2-3 business days from submitting your license details to receiving payment. The valuation step usually happens within 24 hours.",
      }
      
      const defaultResponse = "I'm sorry, I didn't understand that. Could you rephrase your question or choose one of the example questions below?"
      
      const botMessage = {
        text: botResponses[inputValue] || defaultResponse,
        sender: 'bot'
      }
      
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleExampleQuestion = (question) => {
    setInputValue(question)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md overflow-hidden">
      <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h3 className="font-semibold">SoftSell Assistant</h3>
        <button onClick={onClose} className="text-white hover:text-blue-200">
          <FaTimes />
        </button>
      </div>
      
      <div className="h-80 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-xs md:max-w-md rounded-lg p-3 ${message.sender === 'user' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            >
              {message.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-3 text-gray-800 dark:text-gray-200">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <form onSubmit={handleSendMessage} className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <button 
            type="submit" 
            className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 transition-colors"
          >
            <FaPaperPlane />
          </button>
        </form>
        
        <div className="mt-2">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {exampleQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleExampleQuestion(question)}
                className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatWidget