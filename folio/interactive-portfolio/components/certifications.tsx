import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from 'lucide-react'

const certificationsData = [
  {
    name: "AWS cloud practitioner essentials- waiting exams",
    issuer: "Amazon Web Services",
    year: "2024",
    description: "Achieving the AWS Certified Cloud Practitioner certification highlights my foundational knowledge of AWS Cloud services and architecture, complementing my expertise in cloud computing for business enterprises. It validates my ability to understand AWS global infrastructure, security best practices, and cost management strategies, aligning with my focus on leveraging cloud technologies to drive innovation and efficiency in IT projects. This certification enhances my ability to integrate cloud solutions into real-world business environments effectively.",
    skills: ["EC2", "S3", "VPC", "Lambda"],
  },
  {
    name: "Certified Information Systems Security Professional (CISSP)",
    issuer: "ISC²",
    year: "2028",
    description: "Information security expertise",
    skills: ["Security & Risk Management", "Asset Security", "Security Architecture"],
  },
  {
    name: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    year: "2025",
    description: "Agile project management with Scrum",
    skills: ["Scrum", "Agile", "Team Facilitation"],
  },
    {
    name: "Comptia Network+",
    issuer: "COMPTIA",
    year: "2025",
    description: "The CompTIA Network+ certification will underscore my ability to design, configure, and troubleshoot both wired and wireless networks, enhancing my expertise in managing and optimizing network infrastructures. It complements my knowledge of IT support and cloud computing, equipping me with essential skills in network security, protocols, and troubleshooting. This certification strengthens my capability to maintain seamless network operations and provide effective solutions in dynamic IT environments.",
    skills: ["Scrum", "Agile", "Team Facilitation"],
  },
  {
    name: "Comptia security+",
    issuer: "COMPTIA",
    year: "2025",
    description: "The CompTIA Security+ certification demonstrates my foundational knowledge in cybersecurity, including network security, threat management, cryptography, and risk mitigation. It strengthens my ability to implement secure IT infrastructures and safeguard systems against emerging security threats. This certification enhances my focus on information security and data governance, aligning with my commitment to protecting critical business data and ensuring compliance with industry security standards",
    skills: ["Scrum", "Agile", "Team Facilitation"],
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="container py-24">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Certifications</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificationsData.map((cert, index) => (
          <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
              <div className="flex items-center">
                <Award className="mr-2 h-6 w-6" />
                <div>
                  <CardTitle>{cert.name}</CardTitle>
                  <CardDescription className="text-green-100">{cert.issuer}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{cert.year}</p>
              <p className="mb-4">{cert.description}</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
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

