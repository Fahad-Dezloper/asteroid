/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import FeatureCard from "@/components/FeatureCard";
 
const content = [
{
  num: 1,
  heading: "Seamless Integration – Deploy in Minutes, Not Weeks",
  image: "https://i.imghippo.com/files/bhzJ6050XqU.png",
  tags: ["Effortless Setup", "Zero Config Hassle", "No Manual Maintenance"],
  des: "Skip the complexity and get automation running in minutes—no coding, no maintenance, no wasted time."
},
{
  num: 2,
  heading: "Stay in Control with Human Oversight",
  image: "https://asteroid.ai/features/inlinereview.png",
  tags: ["🔔 Instant Alerts", "Real-Time Decision Making", "Complete Transparency"],
  des: "Automation runs on its own, but you stay in charge with real-time alerts and approvals."
},
{
  num: 3,
  heading: "AI That Learns and Adapts Automatically",
  image: "https://asteroid.ai/features/rundetails.png",
  tags: ["Self-Learning Automation", "Built for Change", "Improves Over Time"],
  des: "Automation that doesn’t just follow rules—it learns, improves, and adapts to changing workflows."
},
{
  num: 4,
  heading: "Built-in Safety Nets to Prevent Costly Mistakes",
  image: "https://asteroid.ai/features/supervisors.png",
  tags: ["Set Smart Boundaries", "Pre-Built Protections", "Error Prevention"],
  des: "Reduce risks with automated safeguards that prevent errors before they happen, ensuring accuracy."
},
{
  num: 5,
  heading: "Scale Without Limits, No Infrastructure Needed",
  image: "https://asteroid.ai/features/runs.png",
  tags: ["1000+ Concurrent Sessions", "Fully Managed", "Effortless Scaling"],
  des: "Run thousands of automated workflows simultaneously without worrying about infrastructure or performance issues."
}
];

export function Features() {
    return (
      <div className="mt-8 py-8 flex flex-col gap-24 w-full h-fit px-28">
        <div className="flex flex-col">
        <h1 className="text-xl text-primary font-body">Features</h1>
        <h1 className="text-[4vw] font-semibold mb-6 text-white font-primary"><span className="">Smarter</span> Automation, Zero Headaches <span className="text-primary font-black">-</span> We Filter the <span className="text-white/20 font-bold">Noise</span></h1>
        </div>
        <div className="w-full h-fit flex flex-col gap-36">
        {content.map((item, i) => (
          <FeatureCard key={i} num={item.num} heading={item.heading} image={item.image} tags={item.tags} des={item.des} />
        ))}
        </div>
      </div>
    );
  }




  {/* <StickyScroll content={content} contentClassName={undefined} /> */}