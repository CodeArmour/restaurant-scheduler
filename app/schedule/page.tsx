import { PageHeader } from "@/components/layout/page-header"
import { Calendar } from "lucide-react"
import { ScheduleClientWrapper } from "@/components/sections/schedule/schedule-client-wrapper"

export default function SchedulePage() {
  return (
    <div className="container mx-auto py-6 px-4 md:py-10 md:px-6">
      <PageHeader title="Monthly Schedule" description="Create and manage your staff schedule" icon={Calendar} />
      <ScheduleClientWrapper />
    </div>
  )
}
