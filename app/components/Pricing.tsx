"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Pricing() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Builder Plan */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="relative h-full transition-shadow hover:shadow-lg">
              <CardHeader className="space-y-2">
                <div className="w-12 h-12 mb-4">
                  <img
                    src="https://asteroid.ai/logo-128-nobg.png"
                    alt="Builder Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Builder
                </h3>
                <p className="text-muted-foreground">Perfect for developers and process owners getting started</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <FeatureItem text="100 free agent runs monthly" />
                <FeatureItem text="Python SDK access" />
                <FeatureItem text="Web supervision dashboard" />
                <FeatureItem text="Basic monitoring tools" />
                <FeatureItem text="Community Slack support" />
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Startup Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="relative h-full border-blue-500/20 bg-blue-500/[0.03] transition-shadow hover:shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                  <Sparkles className="w-3.5 h-3.5" />
                  Popular
                </span>
              </div>
              <CardHeader className="space-y-2">
                <div className="w-12 h-12 mb-4">
                  <img
                    src="https://asteroid.ai/logo-128-nobg.png"
                    alt="Startup Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Startup
                </h3>
                <p className="text-muted-foreground">For growing teams</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <FeatureItem text="Unlimited pay-as-you-go agent runs" />
                <FeatureItem text="Expert guidance building your agents" />
                <FeatureItem text="Intelligent Agent Safeguards" />
                <FeatureItem text="Performance optimization" />
                <FeatureItem text="Enterprise-grade support and SLAs" />
              </CardContent>
              <CardFooter>
                <Button className="w-full">Contact Us</Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="relative h-full transition-shadow hover:shadow-lg">
              <CardHeader className="space-y-2">
                <div className="w-12 h-12 mb-4">
                  <img
                    src="https://asteroid.ai/logo-128-nobg.png"
                    alt="Enterprise Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Enterprise Design Partner
                </h3>
                <p className="text-muted-foreground">
                  We&apos;re looking for innovative teams pushing the boundaries of web automation
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <FeatureItem text="Work directly with us to shape the future of browser automation" />
                <FeatureItem text="Shape the future of browser automation" />
                <FeatureItem text="Get features built for your specific needs" />
                <FeatureItem text="Receive considerable volume discounts" />
                <FeatureItem text="Weekly feedback and collaboration sessions" />
                <FeatureItem text="Enterprise-grade support and SLAs" />
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Partner With Us
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
      <span className="text-sm">{text}</span>
    </div>
  )
}

