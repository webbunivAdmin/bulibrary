"use client"

import { BarChart3, BookOpen, GraduationCap, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function LibraryStats() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          Library Statistics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Collection Size</span>
              </div>
              <span className="text-sm font-medium">50,000+</span>
            </div>
            <Progress value={85} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">Print volumes, e-books, journals, and multimedia</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Academic Databases</span>
              </div>
              <span className="text-sm font-medium">30+</span>
            </div>
            <Progress value={70} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">Specialized research databases across disciplines</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Daily Visitors</span>
              </div>
              <span className="text-sm font-medium">500+</span>
            </div>
            <Progress value={65} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">Average daily library usage</p>
          </div>

          <div className="pt-2">
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="rounded-lg bg-primary/5 p-2">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-xs text-muted-foreground">Online Access</p>
              </div>
              <div className="rounded-lg bg-primary/5 p-2">
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-xs text-muted-foreground">Staff Members</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

