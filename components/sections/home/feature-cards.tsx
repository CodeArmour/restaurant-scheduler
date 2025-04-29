"use client"

import Link from "next/link"
import { CalendarDays, FileSpreadsheet, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function FeatureCards() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="group overflow-hidden border-border/40 transition-all hover:shadow-md">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 pb-4">
            <CardTitle className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <CalendarDays className="h-5 w-5" />
              </div>
              <span>Monthly Schedule</span>
            </CardTitle>
            <CardDescription>Create and manage monthly staff schedules</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4 text-muted-foreground">
              Easily assign kitchen and cashier positions for each day of the month.
            </p>
            <Link href="/schedule">
              <Button className="w-full">View Schedule</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="group overflow-hidden border-border/40 transition-all hover:shadow-md">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 pb-4">
            <CardTitle className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Users className="h-5 w-5" />
              </div>
              <span>Staff Management</span>
            </CardTitle>
            <CardDescription>Register and manage restaurant staff</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4 text-muted-foreground">Add new staff members and manage existing ones.</p>
            <Link href="/staff">
              <Button className="w-full">Manage Staff</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="group overflow-hidden border-border/40 transition-all hover:shadow-md">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 pb-4">
            <CardTitle className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <FileSpreadsheet className="h-5 w-5" />
              </div>
              <span>Export Options</span>
            </CardTitle>
            <CardDescription>Download schedules in different formats</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4 text-muted-foreground">
              Export your schedule as PDF or Excel file for easy distribution.
            </p>
            <div className="flex gap-2">
              <Link href="/schedule?export=pdf" className="flex-1">
                <Button variant="outline" className="w-full">
                  PDF
                </Button>
              </Link>
              <Link href="/schedule?export=excel" className="flex-1">
                <Button variant="outline" className="w-full">
                  Excel
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
