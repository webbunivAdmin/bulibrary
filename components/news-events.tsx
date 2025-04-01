"use client"

import { Calendar, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// Sample news and events
const newsEvents = [
  {
    id: 1,
    title: "Library Week 2023: Celebrating Knowledge and Innovation",
    date: "October 15-21, 2023",
    type: "Event",
    description:
      "Join us for a week of workshops, exhibitions, and guest lectures celebrating the power of information and research.",
    url: "#",
  },
  {
    id: 2,
    title: "New Database Acquisition: Scopus Now Available",
    date: "September 30, 2023",
    type: "News",
    description:
      "We're pleased to announce that Scopus, the largest abstract and citation database of peer-reviewed literature, is now available to all Bugema University students and faculty.",
    url: "#",
  },
  {
    id: 3,
    title: "Research Skills Workshop Series",
    date: "Every Wednesday, 2:00 PM - 4:00 PM",
    type: "Workshop",
    description:
      "Enhance your research capabilities with our weekly workshops covering literature review, citation management, and academic writing.",
    url: "#",
  },
]

export default function NewsEvents() {
  return (
    <div className="space-y-6">
      {newsEvents.map((item) => (
        <Card key={item.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <Badge variant={item.type === "Event" ? "default" : item.type === "Workshop" ? "secondary" : "outline"}>
                {item.type}
              </Badge>
            </div>
            <CardTitle className="text-xl mt-2">{item.title}</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {item.date}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{item.description}</p>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="link" className="p-0 h-auto text-primary flex items-center gap-1">
              Learn More <ChevronRight className="h-4 w-4" />
            </Button>
          </CardFooter>
          <Separator />
        </Card>
      ))}

      <div className="text-center pt-4">
        <Button variant="outline">View All News & Events</Button>
      </div>
    </div>
  )
}

