import {
  BookOpen,
  Clock,
  ExternalLink,
  FileText,
  Info,
  Library,
  LogIn,
  MapPin,
  Phone,
  Calendar,
  GraduationCap,
  BookMarked,
  Users,
  HelpCircle,
  Search,
  ArrowRight,
  Bell,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import CategorySidebar from "@/components/category-sidebar"
import ResourceGrid from "@/components/resource-grid"
import ExternalLibraries from "@/components/external-libraries"
import LibraryStats from "@/components/library-stats"
import FeaturedResources from "@/components/featured-resources"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="bg-blue-50 dark:bg-blue-900/30 py-1 border-b border-blue-100 dark:border-blue-800">
        <div className="container mx-auto">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-blue-700 dark:text-blue-500" />
                <span>Mon-Thu: 8AM-10PM | Fri: 8AM-2PM | Sun: 8AM-6PM</span>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <Phone className="h-3 w-3 text-blue-700 dark:text-blue-500" />
                <span>+256 312 351400</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/faq" className="hover:underline flex items-center gap-1 text-blue-700 dark:text-blue-500">
                <HelpCircle className="h-3 w-3" />
                <span>Help</span>
              </Link>
              <Link
                href="/auth/login"
                className="hover:underline flex items-center gap-1 text-blue-700 dark:text-blue-500"
              >
                <LogIn className="h-3 w-3" />
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b bg-white dark:bg-gray-900 py-4 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <Image
                src="/bugema.png"
                alt="Bugema University Library"
                width={50}
                height={50}
                className="h-auto"
              />
              <div className="ml-3">
                <h1 className="text-xl font-bold">Bugema University Library</h1>
                <p className="text-xs text-muted-foreground">Apocalyptic Studies Collection</p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                <Input
                  placeholder="Search books, journals, articles..."
                  className="pl-8 pr-12 border-blue-200 dark:border-blue-800 focus-visible:ring-blue-500"
                />
                <Button
                  size="sm"
                  className="absolute right-1 top-1/2 h-7 -translate-y-1/2 bg-blue-700 hover:bg-blue-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Search
                </Button>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="bg-blue-700 text-white dark:bg-blue-800">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <nav className="flex overflow-x-auto">
              <Link
                href="/"
                className="px-4 py-3 font-medium hover:bg-blue-600 dark:hover:bg-blue-700 border-b-2 border-gold-500"
              >
                Home
              </Link>
              <Link href="/about" className="px-4 py-3 font-medium hover:bg-blue-600 dark:hover:bg-blue-700">
                About
              </Link>
              <Link href="/services" className="px-4 py-3 font-medium hover:bg-blue-600 dark:hover:bg-blue-700">
                Services
              </Link>
              <Link href="/resources" className="px-4 py-3 font-medium hover:bg-blue-600 dark:hover:bg-blue-700">
                Resources
              </Link>
              <Link href="/research" className="px-4 py-3 font-medium hover:bg-blue-600 dark:hover:bg-blue-700">
                Research
              </Link>
              <Link href="/e-resources" className="px-4 py-3 font-medium hover:bg-blue-600 dark:hover:bg-blue-700">
                E-Resources
              </Link>
              <Link href="/contact" className="px-4 py-3 font-medium hover:bg-blue-600 dark:hover:bg-blue-700">
                Contact
              </Link>
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="http://opac.bugemauniv.ac.ug/"
                className="px-4 py-3 font-medium hover:bg-blue-600 dark:hover:bg-blue-700 flex items-center gap-1"
              >
                <span>OPAC</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
              <Link
                href="http://bugemauniv.ac.ug/"
                className="px-4 py-3 font-medium hover:bg-blue-600 dark:hover:bg-blue-700 flex items-center gap-1"
              >
                <span>University</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="hero-pattern bg-cover bg-center py-16 relative">
        <div className="absolute inset-0 bg-blue-700/10 dark:bg-blue-700/20 backdrop-blur-sm"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4 text-blue-700 dark:text-blue-500">Apocalyptic Studies Collection</h1>
            <p className="text-lg mb-6">
              Explore our comprehensive collection of apocalyptic literature, scholarly resources, and theological
              studies from various religious traditions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
                Explore Resources
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-700 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30"
              >
                Library Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto py-12">
        {/* Quick Access Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-l-4 border-l-blue-700 dark:border-l-blue-600">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <BookMarked className="h-5 w-5 text-blue-700 dark:text-blue-500" />
                Online Catalog
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Search our comprehensive catalog of apocalyptic literature, commentaries, and scholarly resources.
              </p>
              <Button variant="link" className="p-0 h-auto text-blue-700 dark:text-blue-500 flex items-center gap-1">
                <Link href="https://koha.bugemauniv.ac.ug/">
                  Access Catalog <ArrowRight className="h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-maroon-700 dark:border-l-maroon-600">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-maroon-700 dark:text-maroon-500" />
                  <Link href="">
                    Academic Journals
                  </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Access peer-reviewed journals and scholarly publications on apocalyptic studies and eschatology.
              </p>
              <Button
                variant="link"
                className="p-0 h-auto text-maroon-700 dark:text-maroon-500 flex items-center gap-1"
              >
                  <Link href="">
                    Browse Journals <ArrowRight className="h-3 w-3" />
                  </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-gold-500 dark:border-l-gold-600">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gold-700 dark:text-gold-500" />
                Book a Space
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Reserve study rooms, multimedia labs, or discussion spaces for your theological research.
              </p>
              <Button variant="link" className="p-0 h-auto text-gold-700 dark:text-gold-500 flex items-center gap-1">
                Make Reservation <ArrowRight className="h-3 w-3" />
                
              </Button>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-700 dark:border-l-blue-600">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="h-5 w-5 text-blue-700 dark:text-blue-500" />
                Library Updates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Stay informed about new acquisitions, events, workshops, and library announcements.
              </p>
              <Button variant="link" className="p-0 h-auto text-blue-700 dark:text-blue-500 flex items-center gap-1">
                
                  <Link href="">
                    View Updates <ArrowRight className="h-3 w-3" />
                  </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Library Information and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-6 border border-blue-100 dark:border-blue-800">
              <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-500 mb-4 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Apocalyptic Studies Collection
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The Bugema University Library's Apocalyptic Studies Collection serves as a specialized resource for
                scholars, students, and researchers interested in apocalyptic literature, eschatology, and end-times
                theology. Our collection encompasses biblical apocalyptic texts, scholarly commentaries, historical
                analyses, and comparative studies across religious traditions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our mission is to provide comprehensive resources for the study of apocalyptic literature with
                particular emphasis on African theological perspectives. We are committed to supporting rigorous
                academic research and theological inquiry in this specialized field.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Button
                  variant="outline"
                  className="gap-1 border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-800"
                >
                  <Info className="h-4 w-4" />
                  About Our Collection
                </Button>
                <Button
                  variant="outline"
                  className="gap-1 border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-800"
                >
                  <Users className="h-4 w-4" />
                  Meet Our Specialists
                </Button>
                <Button
                  variant="outline"
                  className="gap-1 border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-800"
                >
                  <Library className="h-4 w-4" />
                  Collection Tour
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary" />
                    Library Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">Main Campus, Bugema University</p>
                        <p className="text-muted-foreground">Luweero District, Uganda</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Contact</p>
                        <p className="text-muted-foreground">+256 312 351400 / +256 414 273012</p>
                        <p className="text-muted-foreground">library@bugemauniv.ac.ug</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">Opening Hours</p>
                        <p className="text-muted-foreground">Monday - Thursday: 8:00 AM - 10:00 PM</p>
                        <p className="text-muted-foreground">Friday: 8:00 AM - 2:00 PM</p>
                        <p className="text-muted-foreground">Sunday: 8:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Saturday: Closed</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Library className="h-5 w-5 text-maroon-700 dark:text-maroon-500" />
                    Library Regulations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-maroon-100 dark:bg-maroon-800/50 p-1 mt-0.5">
                        <span className="text-xs font-medium text-maroon-700 dark:text-maroon-500">1</span>
                      </div>
                      <p>Valid university ID required for entry and borrowing privileges</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-maroon-100 dark:bg-maroon-800/50 p-1 mt-0.5">
                        <span className="text-xs font-medium text-maroon-700 dark:text-maroon-500">2</span>
                      </div>
                      <p>Maintain silence in designated reading areas</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-maroon-100 dark:bg-maroon-800/50 p-1 mt-0.5">
                        <span className="text-xs font-medium text-maroon-700 dark:text-maroon-500">3</span>
                      </div>
                      <p>Food and beverages are restricted to designated areas only</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-maroon-100 dark:bg-maroon-800/50 p-1 mt-0.5">
                        <span className="text-xs font-medium text-maroon-700 dark:text-maroon-500">4</span>
                      </div>
                      <p>Return borrowed materials by the due date to avoid fines</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-maroon-100 dark:bg-maroon-800/50 p-1 mt-0.5">
                        <span className="text-xs font-medium text-maroon-700 dark:text-maroon-500">5</span>
                      </div>
                      <p>Undergraduate students: 3 books for 14 days; Postgraduate: 5 books for 21 days</p>
                    </li>
                  </ul>
                  <Button variant="link" className="p-0 h-auto mt-3 text-maroon-700 dark:text-maroon-500">
                    View Complete Library Policy
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <LibraryStats />
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Library Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-800/50 flex items-center justify-center">
                      <BookMarked className="h-4 w-4 text-blue-700 dark:text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium">Circulation Services</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Borrowing, returns, renewals</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                    <div className="h-8 w-8 rounded-full bg-maroon-100 dark:bg-maroon-800/50 flex items-center justify-center">
                      <Search className="h-4 w-4 text-maroon-700 dark:text-maroon-500" />
                    </div>
                    <div>
                      <p className="font-medium">Reference Services</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Research assistance and guidance</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                    <div className="h-8 w-8 rounded-full bg-gold-100 dark:bg-gold-800/50 flex items-center justify-center">
                      <GraduationCap className="h-4 w-4 text-gold-700 dark:text-gold-500" />
                    </div>
                    <div>
                      <p className="font-medium">Information Literacy</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Training and workshops</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-800/50 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-blue-700 dark:text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium">Interlibrary Loan</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Access to external resources</p>
                    </div>
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-blue-700 hover:bg-blue-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700">
                  View All Services
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Resources</h2>
            <Button variant="outline">View All Resources</Button>
          </div>
          <FeaturedResources />
        </div>

        <Separator className="my-12" />

        {/* Resources and External Libraries */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Library Resources</h2>
          <Tabs defaultValue="external" className="mb-8">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100 dark:bg-gray-800">
              <TabsTrigger
                value="resources"
                className="data-[state=active]:bg-blue-700 data-[state=active]:text-white dark:data-[state=active]:bg-blue-600"
              >
                University Resources
              </TabsTrigger>
              <TabsTrigger
                value="external"
                className="data-[state=active]:bg-blue-700 data-[state=active]:text-white dark:data-[state=active]:bg-blue-600"
              >
                External Academic Libraries
              </TabsTrigger>
            </TabsList>

            <TabsContent value="resources">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Sidebar */}
                <div className="md:col-span-1">
                  <CategorySidebar />
                </div>

                {/* Resources */}
                <div className="md:col-span-3">
                  <ResourceGrid />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="external">
              <ExternalLibraries />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-700 text-white dark:bg-blue-800 pt-12 pb-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About the Library</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/staff" className="hover:underline">
                    Library Staff
                  </Link>
                </li>
                <li>
                  <Link href="/mission" className="hover:underline">
                    Mission & Vision
                  </Link>
                </li>
                <li>
                  <Link href="/history" className="hover:underline">
                    History
                  </Link>
                </li>
                <li>
                  <Link href="/policies" className="hover:underline">
                    Policies & Guidelines
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/borrowing" className="hover:underline">
                    Borrowing & Returns
                  </Link>
                </li>
                <li>
                  <Link href="/services/research" className="hover:underline">
                    Research Assistance
                  </Link>
                </li>
                <li>
                  <Link href="/services/interlibrary" className="hover:underline">
                    Interlibrary Loan
                  </Link>
                </li>
                <li>
                  <Link href="/services/printing" className="hover:underline">
                    Printing & Copying
                  </Link>
                </li>
                <li>
                  <Link href="/services/training" className="hover:underline">
                    Information Literacy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://koha.bugemauniv.ac.ug/" className="hover:underline">
                    Online Catalog
                  </Link>
                </li>
                <li>
                  <Link href="/resources/databases" className="hover:underline">
                    Databases
                  </Link>
                </li>
                <li>
                  <Link href="/resources/journals" className="hover:underline">
                    E-Journals
                  </Link>
                </li>
                <li>
                  <Link href="/resources/theses" className="hover:underline">
                    Theses & Dissertations
                  </Link>
                </li>
                <li>
                  <Link href="/resources/archives" className="hover:underline">
                    Archives
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>
                    Main Campus, Bugema University
                    <br />
                    Luweero District, Uganda
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>
                    +256 312 351400
                    <br />
                    +256 414 273012
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>library@bugemauniv.ac.ug</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-white/20 my-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">© {new Date().getFullYear()} Bugema University Library. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-sm hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:underline">
                Terms of Use
              </Link>
              <Link href="/accessibility" className="text-sm hover:underline">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

