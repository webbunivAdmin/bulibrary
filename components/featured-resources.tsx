"use client"

import { ExternalLink, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Featured apocalyptic resources
const featuredResources = [
  {
    id: 1,
    title: "The Book of Revelation: A Commentary",
    type: "Reference",
    description: "Comprehensive scholarly analysis of the Book of Revelation with historical and theological context.",
    accessType: "Subscription",
    category: "Biblical Studies",
    rating: 4.8,
    url: "#",
  },
  {
    id: 2,
    title: "Apocalyptic Literature in the Ancient World",
    type: "Database",
    description: "Collection of apocalyptic texts from various ancient cultures with translations and annotations.",
    accessType: "Subscription",
    category: "Religious Studies",
    rating: 4.7,
    url: "#",
  },
  {
    id: 3,
    title: "Eschatology in African Christian Theology",
    type: "Journal Collection",
    description: "Scholarly articles examining end-times theology from African theological perspectives.",
    accessType: "Open Access",
    category: "African Theology",
    rating: 4.6,
    url: "#",
  },
  {
    id: 4,
    title: "Symbols and Imagery in Apocalyptic Literature",
    type: "Reference",
    description: "Analysis of symbolic language and imagery in apocalyptic texts across religious traditions.",
    accessType: "Subscription",
    category: "Comparative Religion",
    rating: 4.9,
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

