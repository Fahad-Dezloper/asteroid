"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function CopyCommand({className, command}) {
  const [copied, setCopied] = useState(false)
  if(command){
      command = command
  }else{
      command = "npx degit xyflow/vite-react-flow-template app-name"
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="relative flex items-center w-full max-w-3xl bg-white border rounded-lg overflow-hidden font-mono text-sm">
      <div className="flex-1 p-4 pr-12">
        <span className="text-blue-300">pip</span>
        <span className="text-slate-700"> install asteroid_sdk</span>
      </div>
      <Button
        size="icon"
        variant="ghost"
        className={cn("absolute right-2 h-8 w-8 hover:bg-blue-300", copied && "text-blue-300")}
        onClick={copyToClipboard}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        <span className="sr-only">Copy command</span>
      </Button>
    </div>
  )
}

