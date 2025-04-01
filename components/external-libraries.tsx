"use client"

import { Search, Globe, Info, Award, BookMarked, FileCheck } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample external libraries - replace with actual data
const externalLibraries = [
  {
    id: 1,
    name: "Project Gutenberg",
    url: "https://www.gutenberg.org/",
    description: "A library of over 60,000 free eBooks, focusing on older works for which U.S. copyright has expired.",
    categories: ["Literature", "History", "Science"],
    logo: "📚",
    type: "Open Access",
  },
  {
    id: 2,
    name: "Open Library",
    url: "https://openlibrary.org/",
    description: "An open, editable library catalog, building towards a web page for every book ever published.",
    categories: ["General", "Fiction", "Non-fiction"],
    logo: "📖",
    type: "Open Access",
  },
  {
    id: 3,
    name: "Directory of Open Access Journals",
    url: "https://doaj.org/",
    description:
      "A community-curated online directory that indexes and provides access to high quality, open access, peer-reviewed journals.",
    categories: ["Academic", "Research", "Journals"],
    logo: "🔍",
    type: "Academic",
  },
  {
    id: 4,
    name: "LibGen",
    url: "https://libgen.st/",
    description:
      "A file-sharing website for scholarly journal articles, academic and general-interest books, images, comics, and magazines.",
    categories: ["Academic", "Textbooks", "Research"],
    logo: "📑",
    type: "Academic",
  },
  {
    id: 5,
    name: "Z-Library",
    url: "https://z-lib.org/",
    description:
      "One of the largest online libraries in the world with millions of books and articles available for download.",
    categories: ["Books", "Articles", "General"],
    logo: "📕",
    type: "General",
  },
  {
    id: 6,
    name: "JSTOR Open Content",
    url: "https://www.jstor.org/open/",
    description: "Free access to thousands of journal articles, book chapters, and reports across many disciplines.",
    categories: ["Academic", "Research", "Humanities"],
    logo: "🏛️",
    type: "Academic",
  },
  {
    id: 7,
    name: "arXiv",
    url: "https://arxiv.org/",
    description:
      "Open access to over 2 million scholarly articles in the fields of physics, mathematics, computer science, and more.",
    categories: ["Physics", "Mathematics", "Computer Science"],
    logo: "🧮",
    type: "Academic",
  },
  {
    id: 8,
    name: "African Journals Online",
    url: "https://www.ajol.info/",
    description: "The world's largest and preeminent platform of African-published scholarly journals.",
    categories: ["African Studies", "Research", "Academic"],
    logo: "🌍",
    type: "Academic",
  },
  {
    id: 9,
    name: "PubMed Central",
    url: "https://www.ncbi.nlm.nih.gov/pmc/",
    description:
      "A free full-text archive of biomedical and life sciences journal literature at the U.S. National Institutes of Health's National Library of Medicine.",
    categories: ["Medicine", "Health Sciences", "Biology"],
    logo: "🔬",
    type: "Academic",
  },
  {
    id: 10,
    name: "World Digital Library",
    url: "https://www.wdl.org/",
    description:
      "A project of the U.S. Library of Congress, with the support of UNESCO, the World Digital Library makes available significant primary materials from countries and cultures around the world.",
    categories: ["History", "Culture", "Heritage"],
    logo: "🌐",
    type: "Cultural",
  },
  {
    id: 11,
    name: "HathiTrust Digital Library",
    url: "https://www.hathitrust.org/",
    description:
      "A partnership of academic and research institutions offering a collection of millions of titles digitized from libraries around the world.",
    categories: ["Academic", "Research", "Multidisciplinary"],
    logo: "📚",
    type: "Academic",
  },
  {
    id: 12,
    name: "Digital Public Library of America",
    url: "https://dp.la/",
    description:
      "A portal that provides access to millions of items—photographs, manuscripts, books, sounds, moving images, and more—from libraries, archives, and museums around the United States.",
    categories: ["History", "Culture", "Arts"],
    logo: "🏛️",
    type: "Cultural",
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

