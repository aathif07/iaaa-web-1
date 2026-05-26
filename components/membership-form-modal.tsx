"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface MembershipFormModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  formUrl: string
  noticeMessage?: string
}

export function MembershipFormModal({
  open,
  onOpenChange,
  title,
  description,
  formUrl,
  noticeMessage
}: MembershipFormModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        {noticeMessage && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-blue-900">{noticeMessage}</p>
          </div>
        )}

        <div className="w-full bg-slate-100 rounded-lg overflow-hidden">
          <iframe
            src={formUrl}
            className="w-full rounded-lg border-0"
            style={{ height: "600px" }}
            loading="lazy"
            title={title}
          />
        </div>

        <p className="text-xs text-slate-500 text-center">
          If the form doesn't load, please{" "}
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            click here to open it in a new window
          </a>
        </p>
      </DialogContent>
    </Dialog>
  )
}
