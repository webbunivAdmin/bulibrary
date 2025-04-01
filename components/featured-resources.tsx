"use client"

import { ExternalLink, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Sample featured resources
const featuredResources = [
  {
    id: 1,
    title: "JSTOR Arts & Sciences Collection",
    type: "Database",
    description:
      "Full-text access to more than 2,000 academic journals across humanities, social sciences, and sciences.",
    accessType: "Subscription",
    category: "Multidisciplinary",
    rating: 4.8,
    url: "#",
  },
  {
    id: 2,
    title: "Oxford English Dictionary Online",
    type: "Reference",
    description: "The definitive record of the English language, featuring 600,000+ words and 3 million quotations.",
    accessType: "Subscription",
    category: "Language & Literature",
    rating: 4.9,
    url: "#",
  },
  {
    id: 3,
    title: "IEEE Xplore Digital Library",
    type: "Database",
    description: "Access to technical literature in engineering, computer science, and related technologies.",
    accessType: "Subscription",
    category: "Engineering & Technology",
    rating: 4.7,
    url: "#",
  },
  {
    id: 4,
    title: "African Journals Online (AJOL)",
    type: "Journal Collection",
    description: "The world's largest and preeminent platform of African-published scholarly journals.",
    accessType: "Open Access",
    category: "African Studies",
    rating: 4.6,
    url: "#",
  },
]

export default function FeaturedResources() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredResources.map((resource) => (
        <Card key={resource.id} className="flex flex-col h-full">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <Badge variant="outline" className="mb-2">
                {resource.type}
              </Badge>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm ml-1">{resource.rating}</span>
              </div>
            </div>
            <CardTitle className="text-lg">{resource.title}</CardTitle>
            <CardDescription>
              {resource.category} • {resource.accessType}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground">{resource.description}</p>
          </CardContent>
          <CardFooter className="pt-2">
            <Button className="w-full gap-2" asChild>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Access Resource
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

