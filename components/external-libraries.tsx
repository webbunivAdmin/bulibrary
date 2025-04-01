"use client"

import { Search, Globe, Info, Award, BookMarked, FileCheck } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// External libraries focused on apocalyptic literature and studies
const externalLibraries = [
  {
    id: 1,
    name: "Apocalyptic Literature Archive",
    url: "https://www.apocalypticliterature.org/",
    description:
      "A comprehensive collection of apocalyptic texts, commentaries, and scholarly research across religious traditions.",
    categories: ["Religious Studies", "Apocalyptic Literature", "Biblical Studies"],
    logo: "📜",
    type: "Academic",
  },
  {
    id: 2,
    name: "Biblical Archaeology Society",
    url: "https://www.biblicalarchaeology.org/",
    description: "Resources connecting archaeological discoveries with biblical texts, including apocalyptic writings.",
    categories: ["Archaeology", "Biblical Studies", "History"],
    logo: "🏺",
    type: "Academic",
  },
  {
    id: 3,
    name: "Revelation Research Repository",
    url: "https://revelation-research.org/",
    description: "Dedicated to scholarly research on the Book of Revelation and related apocalyptic texts.",
    categories: ["Biblical Studies", "Theology", "Apocalyptic Literature"],
    logo: "📖",
    type: "Academic",
  },
  {
    id: 4,
    name: "Early Christian Writings",
    url: "https://www.earlychristianwritings.com/",
    description: "Collection of texts from early Christianity, including apocalyptic literature and commentaries.",
    categories: ["Early Christianity", "Religious Texts", "History"],
    logo: "✝️",
    type: "Open Access",
  },
  {
    id: 5,
    name: "Digital Dead Sea Scrolls",
    url: "https://www.deadseascrolls.org.il/",
    description: "Digital access to the Dead Sea Scrolls, including apocalyptic texts and commentaries.",
    categories: ["Ancient Texts", "Biblical Studies", "Archaeology"],
    logo: "📜",
    type: "Cultural",
  },
  {
    id: 6,
    name: "Eschatology Studies Journal",
    url: "https://eschatologystudies.org/",
    description:
      "Academic journal dedicated to the study of end-times literature and theology across religious traditions.",
    categories: ["Theology", "Comparative Religion", "Eschatology"],
    logo: "🔍",
    type: "Academic",
  },
  {
    id: 7,
    name: "Apocalypse and Prophecy Archive",
    url: "https://apocalypsearchive.edu/",
    description:
      "Scholarly repository of prophetic and apocalyptic texts from various religious and cultural traditions.",
    categories: ["Comparative Religion", "Prophecy", "Cultural Studies"],
    logo: "🌍",
    type: "Academic",
  },
  {
    id: 8,
    name: "African Theological Journal Database",
    url: "https://africantheology.org/",
    description: "Collection of African theological perspectives, including interpretations of apocalyptic literature.",
    categories: ["African Studies", "Theology", "Cultural Studies"],
    logo: "🌍",
    type: "Academic",
  },
]

export default function ExternalLibraries() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredLibraries = externalLibraries.filter((library) => {
    const matchesSearch =
      library.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      library.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      library.categories.some((category) => category.toLowerCase().includes(searchQuery.toLowerCase()))

    if (activeTab === "all") return matchesSearch
    return matchesSearch && library.type.toLowerCase() === activeTab.toLowerCase()
  })

  const openExternalLibrary = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search external libraries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 md:w-80"
          />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="open access">Open Access</TabsTrigger>
            <TabsTrigger value="cultural">Cultural</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLibraries.length > 0 ? (
          filteredLibraries.map((library) => (
            <Card key={library.id} className="flex flex-col h-full">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl" aria-hidden="true">
                      {library.logo}
                    </span>
                    <CardTitle className="text-lg">{library.name}</CardTitle>
                  </div>
                  <Badge variant="outline">{library.type}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-2">{library.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {library.categories.map((category, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2 flex gap-2">
                <Button className="w-full gap-2" onClick={() => openExternalLibrary(library.url)}>
                  <Globe className="h-4 w-4" />
                  Visit Library
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center p-8 border rounded-lg">
            <p className="text-muted-foreground">No external libraries found matching your search criteria.</p>
          </div>
        )}
      </div>

      <div className="mt-8 p-6 bg-muted/30 rounded-lg border">
        <h3 className="text-lg font-medium flex items-center gap-2 mb-4">
          <Info className="h-5 w-5 text-primary" />
          Academic Resources Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-2">
              <Award className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium">Quality Resources</h4>
                <p className="text-sm text-muted-foreground">
                  These external libraries have been vetted for academic quality and reliability.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-2">
              <BookMarked className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium">Citation Guidelines</h4>
                <p className="text-sm text-muted-foreground">
                  Always properly cite materials accessed through these resources according to your required citation
                  style.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-2">
              <FileCheck className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium">Copyright Compliance</h4>
                <p className="text-sm text-muted-foreground">
                  Respect copyright laws and terms of use when accessing and using these resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

