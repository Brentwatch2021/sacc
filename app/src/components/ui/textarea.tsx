import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-gray-300 placeholder:text-gray-500 focus-visible:border-[#2d8a5e] focus-visible:ring-[#2d8a5e]/30 aria-invalid:ring-red-500/20 aria-invalid:border-red-500 flex field-sizing-content min-h-20 w-full rounded-md border bg-white px-3 py-2 text-base shadow-sm transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
