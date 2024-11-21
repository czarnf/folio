import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center min-h-screen text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
          Emmanuel Chiefson
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300"
        >
          IT professional | Cloud Computing | Cyber Security | Data Analysis | Agile Practitioner
          Governance, Risk, and Compliance (GRC) | IOT with linked open data | Aspiring DevOps Engineer |
          IT support 
        </motion.p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
          <a href="#contact">Get in Touch</a>
        </Button>
        <Button asChild variant="outline" className="ml-4">
          <a href="/path-to-your-cv.pdf" download>Download CV</a>
        </Button>
      </motion.div>
    </section>
  )
}

