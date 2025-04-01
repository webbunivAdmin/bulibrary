"use client"

import { useState } from "react"
import { BookOpen, ChevronRight, ExternalLink, FolderOpen, GraduationCap, Layers, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"

// Sample categories - replace with actual data from your backend
const categories = [
  {
    id: 1,
    name: "Agriculture & Environmental Sciences",
    count: 124,
    subcategories: [
      { id: 101, name: "Agricultural Economics", count: 28 },
      { id: 102, name: "Crop Science", count: 42 },
      { id: 103, name: "Environmental Management", count: 35 },
      { id: 104, name: "Soil Science", count: 19 },
    ],
  },
  {
    id: 2,
    name: "Business Administration",
    count: 187,
    subcategories: [
      { id: 201, name: "Accounting", count: 45 },
      { id: 202, name: "Finance", count: 52 },
      { id: 203, name: "Management", count: 63 },
      { id: 204, name: "Marketing", count: 27 },
    ],
  },
  {
    id: 3,
    name: "Computer Science & Information Technology",
    count: 156,
    subcategories: [
      { id: 301, name: "Artificial Intelligence", count: 32 },
      { id: 302, name: "Database Systems", count: 28 },
      { id: 303, name: "Networking", count: 41 },
      { id: 304, name: "Software Engineering", count: 55 },
    ],
  },
  {
    id: 4,
    name: "Education",
    count: 143,
    subcategories: [
      { id: 401, name: "Curriculum Development", count: 38 },
      { id: 402, name: "Educational Psychology", count: 47 },
      { id: 403, name: "Teaching Methods", count: 58 },
    ],
  },
  {
    id: 5,
    name: "Health Sciences",
    count: 178,
    subcategories: [
      { id: 501, name: "Nursing", count: 62 },
      { id: 502, name: "Public Health", count: 53 },
      { id: 503, name: "Nutrition", count: 34 },
      { id: 504, name: "Epidemiology", count: 29 },
    ],
  },
  {
    id: 6,
    name: "Religion & Theology",
    count: 112,
    subcategories: [
      { id: 601, name: "Biblical Studies", count: 45 },
      { id: 602, name: "Church History", count: 32 },
      { id: 603, name: "Pastoral Ministry", count: 35 },
    ],
  },
  {
    id: 7,
    name: "Social Sciences",
    count: 165,
    subcategories: [
      { id: 701, name: "Economics", count: 48 },
      { id: 702, name: "Psychology", count: 57 },
      { id: 703, name: "Sociology", count: 42 },
      { id: 704, name: "Political Science", count: 18 },
    ],
  },
  {
    id: 8,
    name: "Technology & Engineering",
    count: 132,
    subcategories: [
      { id: 801, name: "Civil Engineering", count: 38 },
      { id: 802, name: "Electrical Engineering", count: 45 },
      { id: 803, name: "Mechanical Engineering", count: 49 },
    ],
  },
  {
    id: 9,
    name: "Arts & Humanities",
    count: 98,
    subcategories: [
      { id: 901, name: "Literature", count: 32 },
      { id: 902, name: "History", count: 41 },
      { id: 903, name: "Philosophy", count: 25 },
    ],
  },
  {
    id: 10,
    name: "Law & Legal Studies",
    count: 87,
    subcategories: [
      { id: 1001, name: "Constitutional Law", count: 28 },
      { id: 1002, name: "International Law", count: 31 },
      { id: 1003, name: "Criminal Law", count: 28 },
    ],
  },
]

export default function CategorySidebar() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
  const [activeSubcategory, setActiveSubcategory] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<number[]>([])

  const toggleCategory = (categoryId: number) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(expandedCategories.filter((id) => id !== categoryId))
    } else {
      setExpandedCategories([...expandedCategories, categoryId])
    }
  }

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.subcategories.some((sub) => sub.name.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // This function is now handled in the ExternalLibraries component
  const openExternalLibrary = () => {
    // Use the tabs to switch to external libraries tab
    const externalTab = document.querySelector('[data-value="external"]') as HTMLElement
    if (externalTab) {
      externalTab.click()
    }
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Layers className="h-5 w-5 text-primary" />
          Subject Categories
        </h3>
      </div>

      <div className="p-3 border-b">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <ScrollArea className="h-[500px]">
        <div className="p-2">
          <Button
            variant={activeCategory === null ? "secondary" : "ghost"}
            className="w-full justify-start mb-2"
            onClick={() => {
              setActiveCategory(null)
              setActiveSubcategory(null)
            }}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            All Categories
            <Badge variant="outline" className="ml-auto">
              {categories.reduce((total, cat) => total + cat.count, 0)}
            </Badge>
          </Button>

          {filteredCategories.map((category) => (
            <Collapsible
              key={category.id}
              open={expandedCategories.includes(category.id)}
              onOpenChange={() => toggleCategory(category.id)}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant={activeCategory === category.id && activeSubcategory === null ? "secondary" : "ghost"}
                  className="w-full justify-start mb-1 group"
                  onClick={() => {
                    setActiveCategory(category.id)
                    setActiveSubcategory(null)
                  }}
                >
                  <FolderOpen className="h-4 w-4 mr-2" />
                  <span className="truncate flex-1 text-left">{category.name}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">
                      {category.count}
                    </Badge>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${expandedCategories.includes(category.id) ? "rotate-90" : ""}`}
                    />
                  </div>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1">
                  {category.subcategories.map((subcategory) => (
                    <Button
                      key={subcategory.id}
                      variant={activeSubcategory === subcategory.id ? "secondary" : "ghost"}
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => {
                        setActiveCategory(category.id)
                        setActiveSubcategory(subcategory.id)
                      }}
                    >
                      <span className="truncate flex-1 text-left">{subcategory.name}</span>
                      <Badge variant="outline">
                        {subcategory.count}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}

          <div className="mt-4 pt-4 border-t">
            <Button variant="outline" className="w-full justify-start gap-2" onClick={openExternalLibrary}>
              <GraduationCap className="h-4 w-4" />
              External Libraries
              <ExternalLink className="h-4 w-4 ml-auto" />
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

