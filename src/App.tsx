import { motion } from "framer-motion";
import './App.css'

function App() {

  return (
    <div className="container">
      <motion.div className="motionDiv"
  initial={{ scale: 0 }}
  animate={{ rotate: 180, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
/>
    </div>
  )
}

export default App
