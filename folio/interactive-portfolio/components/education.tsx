import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from 'lucide-react'

const educationData = [
  {
    degree: "Master of Science in Information Technology",
    institution: "University of the West of England",
    year: "2023 - 2024",
    description: "During my MSc studies, I developed a strong specialization in Cybersecurity, Information Security, and Data Governance, with an emphasis on securing and managing enterprise information systems. I am skilled in Software Project Management and the software development lifecycle, as well as Digital Design and Development, which enables me to lead and implement efficient and innovative solutions.My expertise also includes Cloud Computing for business enterprises and the Internet of Things (IoT). allowing me the ability to leveraging linked and open data to drive technological advancements and address complex business challenges.",
    achievements: ["Thesis on Cyber security within the healthcare space", "Grade:Merit"],
  },
  {
    degree: "Bachelor of Science in project management",
    institution: "Ecole Supérieure D'Administration, D'Economie, De Journalisme Et Des Métiers De L'Audiovisuel (ESAE)",
    year: "2019 - 2022",
    description: "The Project Management BSc focused on equipping me with practical and theoretical knowledge to plan, execute, and manage projects effectively. It emphasized key areas such as risk management, stakeholder engagement, resource allocation, and Agile methodologies, preparing me to deliver successful outcomes in dynamic environments.",
    achievements: ["Grade:2:1"],
  },
]

export function Education() {
  return (
    <section id="education" className="container py-24">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Education</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
              <div className="flex items-center">
                <GraduationCap className="mr-2 h-6 w-6" />
                <div>
                  <CardTitle>{edu.degree}</CardTitle>
                  <CardDescription className="text-purple-100">{edu.institution}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.year}</p>
              <p className="mb-4">{edu.description}</p>
              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((achievement, achievementIndex) => (
                  <Badge key={achievementIndex} variant="secondary">{achievement}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

