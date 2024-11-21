import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from 'lucide-react'

const experiences = [
  {
    title: "IT support technician",
    company: "Bayside consult.",
    period: "2022 - 2023",
    description: "Provided technical support for hardware, software, and network systems critical to oil servicing and construction firms in the Niger Delta. Ensured system uptime, maintained IT infrastructure, and supported remote access for teams in demanding, remote locations. Facilitated seamless operations by resolving technical challenges and enhancing connectivity",
    skills: ["Jira service desk", "Microsoft remote desktop", "microsoft office suite and azure " "windows & mac OS" ],
  },
  {
    title: "freelance Web developer",
    company: "fiverr",
    period: "2019 - 2022",
    description: "Developed and maintained various web applications using HTML ,CSS and tailwind CSS & JavaScript frameworks.",
    skills: ["Vue.js", "Express", "MongoDB", "Docker"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="container py-24">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Experience</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription className="text-blue-100">{exp.company}</CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <CalendarDays className="mr-2 h-4 w-4" />
                <span>{exp.period}</span>
              </div>
              <p className="mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

