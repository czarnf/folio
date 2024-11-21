"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Task Management App",
    description: "A responsive web app for managing tasks and projects",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Social Media Dashboard",
    description: "An interactive dashboard for social media analytics",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "D3.js", "Express", "PostgreSQL"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="container py-24">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Featured Projects</h2>
      <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden shadow-xl">
                <CardContent className="p-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <Button asChild>
                      <a href="#" className="w-full">View Project</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

