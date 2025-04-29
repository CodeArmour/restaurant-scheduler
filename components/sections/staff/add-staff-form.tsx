"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

type NewWorker = {
  name: string
  position: "kitchen" | "cashier" | "both"
  phone: string
  email: string
}

interface AddStaffFormProps {
  onSubmit: (worker: NewWorker) => void
  onCancel: () => void
}

export function AddStaffForm({ onSubmit, onCancel }: AddStaffFormProps) {
  const [newWorker, setNewWorker] = useState<NewWorker>({
    name: "",
    position: "kitchen",
    phone: "",
    email: "",
  })

  return (
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          value={newWorker.name}
          onChange={(e) => setNewWorker({ ...newWorker, name: e.target.value })}
          placeholder="Enter worker's full name"
        />
      </div>

      <div className="grid gap-2">
        <Label>Position</Label>
        <RadioGroup
          value={newWorker.position}
          onValueChange={(value) => setNewWorker({ ...newWorker, position: value as "kitchen" | "cashier" | "both" })}
          className="grid grid-cols-1 gap-2"
        >
          <div className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted">
            <RadioGroupItem value="kitchen" id="kitchen" />
            <Label htmlFor="kitchen" className="flex-1 cursor-pointer">
              Kitchen
            </Label>
          </div>
          <div className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted">
            <RadioGroupItem value="cashier" id="cashier" />
            <Label htmlFor="cashier" className="flex-1 cursor-pointer">
              Cashier
            </Label>
          </div>
          <div className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted">
            <RadioGroupItem value="both" id="both" />
            <Label htmlFor="both" className="flex-1 cursor-pointer">
              Both
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          value={newWorker.phone}
          onChange={(e) => setNewWorker({ ...newWorker, phone: e.target.value })}
          placeholder="Enter phone number"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={newWorker.email}
          onChange={(e) => setNewWorker({ ...newWorker, email: e.target.value })}
          placeholder="Enter email address"
        />
      </div>

      <div className="flex justify-end gap-2 mt-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={() => onSubmit(newWorker)}>Add Worker</Button>
      </div>
    </div>
  )
}
