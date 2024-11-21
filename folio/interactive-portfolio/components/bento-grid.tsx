import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Code2, Server, Wrench, Users } from 'lucide-react'

interface BentoItemProps {
  title: string
  children: ReactNode
  className?: string
  icon: ReactNode
}

function BentoItem({ title, children, className = "", icon }: BentoItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 ${className}`}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-lg font-semibold ml-2">{title}</h3>
      </div>
      {children}
    </motion.div>
  )
}

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <BentoItem title="Frontend" icon={<Code2 className="w-6 h-6" />} className="col-span-1 md:col-span-2 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800">
        <p>React, Next.js, Vue.js, Tailwind CSS, Framer Motion, HTML, CSS</p>
      </BentoItem>
      <BentoItem title="Backend" icon={<Server className="w-6 h-6" />} className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800">
        <p>Node.js, Python, PostgreSQL</p>
      </BentoItem>
      <BentoItem title="Tools" icon={<Wrench className="w-6 h-6" />} className="bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800">
        <p>Github, AWS, Azure, Figma, Vo, Jira, Active Directory, etc</p>
      </BentoItem>
      <BentoItem title="Soft Skills" icon={<Users className="w-6 h-6" />} className="bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800">
        <p>Team Leadership, Problem Solving, Analytical Thinking, Adaptability, Communication, Collaboration, Attention to Detail, Time Management, Leadership, Customer Focus, Resilience.</p>
      </BentoItem>
    </div>
  )
}

