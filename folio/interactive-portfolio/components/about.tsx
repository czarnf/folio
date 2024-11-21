import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="container py-24">
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
          <CardDescription>Get to know me better</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image0%20(2)-OGlclxpfWHajHGPNm7djUshfBB3Avr.jpeg"
            alt="Emmanuel Chiefson"
            width={200}
            height={200}
            className="rounded-full"
          />
          <p className="text-lg">
            I am a versatile IT professional with expertise in web development, project management,
            cybersecurity, and cloud computing. I have hands-on experience creating dynamic web applications,
            analyzing data to find solutions, and delivering IT support. Skilled in Agile methodologies and
            information governance, I combine technical expertise with strategic execution to drive efficiency
            and innovation in digital transformation projects.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

