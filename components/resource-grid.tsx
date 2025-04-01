"use client"

import { useState } from "react"
import { Download, FileText, Search, BookOpen, Filter, SortAsc, SortDesc } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

// Sample resources - replace with actual data from your backend
const resources = [
  {
    id: 1,
    title: "Introduction to Agricultural Sciences",
    author: "Dr. John Smith",
    category: "Agriculture",
    type: "E-Book",
    year: 2022,
    description: "A comprehensive guide to modern agricultural practices and technologies.",
    downloadUrl: "#",
    citation: "Smith, J. (2022). Introduction to Agricultural Sciences. Bugema University Press.",
    format: "PDF",
  },
  {
    id: 2,
    title: "Business Ethics and Corporate Governance",
    author: "Prof. Mary Johnson",
    category: "Business Administration",
    type: "Journal",
    year: 2021,
    description: "An exploration of ethical considerations in modern business practices.",
    downloadUrl: "#",
    citation:
      "Johnson, M. (2021). Business Ethics and Corporate Governance. Journal of Business Studies, 15(2), 45-67.",
    format: "HTML",
  },
  {
    id: 3,
    title: "Fundamentals of Computer Programming",
    author: "Dr. Robert Williams",
    category: "Computer Science",
    type: "E-Book",
    year: 2023,
    description: "A beginner's guide to programming concepts and practices.",
    downloadUrl: "#",
    citation: "Williams, R. (2023). Fundamentals of Computer Programming. Tech Education Publishers.",
    format: "PDF",
  },
  {
    id: 4,
    title: "Educational Psychology: Theory and Practice",
    author: "Dr. Sarah Brown",
    category: "Education",
    type: "Journal",
    year: 2022,
    description: "An examination of psychological principles applied to educational settings.",
    downloadUrl: "#",
    citation:
      "Brown, S. (2022). Educational Psychology: Theory and Practice. Educational Research Quarterly, 8(4), 112-130.",
    format: "PDF",
  },
  {
    id: 5,
    title: "Public Health in Developing Countries",
    author: "Dr. Michael Lee",
    category: "Health Sciences",
    type: "Research Paper",
    year: 2023,
    description: "A study of public health challenges and solutions in developing nations.",
    downloadUrl: "#",
    citation: "Lee, M. (2023). Public Health in Developing Countries. Global Health Journal, 7(3), 78-95.",
    format: "PDF",
  },
  {
    id: 6,
    title: "Comparative Religious Studies",
    author: "Prof. David Wilson",
    category: "Religion & Theology",
    type: "E-Book",
    year: 2021,
    description: "An analysis of major world religions and their philosophical foundations.",
    downloadUrl: "#",
    citation: "Wilson, D. (2021). Comparative Religious Studies. Faith & Philosophy Press.",
    format: "EPUB",
  },
]

export default function ResourceGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<string>("all")
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [showFilters, setShowFilters] = useState(false)

  const filteredResources = resources
    .filter(
      (resource) =>
        (searchQuery === "" ||
          resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resource.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resource.category.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedType === "all" || resource.type === selectedType) &&
        (selectedYear === "all" || resource.year.toString() === selectedYear),
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.year - b.year
      } else {
        return b.year - a.year
      }
    })

  const years = [...new Set(resources.map((resource) => resource.year))].sort((a, b) => b - a)
  const types = [...new Set(resources.map((resource) => resource.type))]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center gap-2 flex-1">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search resources by title, author, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4" />
              Filters
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="gap-1"
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            >
              {sortOrder === "asc" ? (
                <>
                  <SortAsc className="h-4 w-4" />
                  Oldest First
                </>
              ) : (
                <>
                  <SortDesc className="h-4 w-4" />
                  Newest First
                </>
              )}
            </Button>
          </div>
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 border rounded-md bg-muted/10">
            <div>
              <Label htmlFor="type-filter">Resource Type</Label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger id="type-filter">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="year-filter">Publication Year</Label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger id="year-filter">
                  <SelectValue placeholder="All Years" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="lg:col-span-2 flex items-end">
              <Button
                variant="secondary"
                className="ml-auto"
                onClick={() => {
                  setSelectedType("all")
                  setSelectedYear("all")
                  setSearchQuery("")
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <Card key={resource.id} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <Badge variant="outline">{resource.type}</Badge>
                </div>
                <CardDescription>
                  {resource.author} • {resource.year} • {resource.category}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <BookOpen className="h-3 w-3" />
                  <span>Format: {resource.format}</span>
                </div>
                <Separator className="my-3" />
                <div className="text-xs">
                  <p className="font-medium mb-1">Citation:</p>
                  <p className="text-muted-foreground italic">{resource.citation}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={resource.downloadUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4 mr-1" />
                    View
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={resource.downloadUrl} download>
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center p-8 border rounded-lg">
            <p className="text-muted-foreground">No resources found matching your search criteria.</p>
          </div>
        )}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

