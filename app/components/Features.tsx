/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { Bell, BookMarked, Brain, CheckCircleIcon, CodeIcon, FileSearch2, Hammer, LucideBoxes, RefreshCcw, Server, Shield, UserCircleIcon, Video } from "lucide-react";
 
const content = [
  {
    title: "Two line integration",
    subheading: "Deploy automation in minutes, not weeks",
    description: [
        {icon: <CodeIcon size={18} />, description: "Launch powerful browser automations with a single line of code"},
        {icon: <FileSearch2 size={18} />, description: "No complex configuration or trawling through API docs"},
        {icon: <Hammer size={18} />, description: "No manual maintenance of automation scripts"}
    ],
    content: (
    //   add copy command for command of python
    <div className="h-full w-full object-cover flex items-center justify-center text-white">
        <img
          src="https://i.imghippo.com/files/bhzJ6050XqU.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="carbox image"
        />
      </div>
    ),
  },
  {
    title: "Human in the loop",
    description: [
      {icon: <Bell size={18} />, description: "Get instant alerts for uncertain situations"},
      {icon: <CheckCircleIcon size={18} />, description: "Review and approve agent actions in real-time"},
      {icon: <Video size={18} />, description: "Access full session recordings for oversight"}],
    content: (
      <div className="h-full w-full object-cover flex items-center justify-center text-white">
        <img
          src="https://asteroid.ai/features/inlinereview.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Autonomous Learning",
    subheading: "Complex workflows, automated without programming",
    description:[
      {icon: <Brain size={18} />, description: "Self-learns and replicates complex workflows"},
      {icon: <RefreshCcw size={18} />, description: "Adapts automatically to website changes"},
      {icon: <UserCircleIcon size={18} />, description: "Improves from every human interaction"}], 
      content: (
        <div className="h-full w-full object-cover flex items-center justify-center text-white">
        <img
          src="https://asteroid.ai/features/rundetails.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Intelligent Guardrails",
    subheading: "Prevent costly mistakes on mission critical workflows",
    description: [
      {icon: <Shield size={18} />, description: "Set and enforce safety boundaries in real-time"},
      {icon: <BookMarked size={18} />, description: "Use pre-built rules for popular websites"}],  
    content: (
      <div className="h-full w-full object-cover flex items-center justify-center text-white">
        <img
          src="https://asteroid.ai/features/supervisors.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Massively scalable",
    subheading: "Scale massively, outsource the headache",
    description: [
      {icon: <LucideBoxes size={18} />, description: "Run 1000+ concurrent sessions on demand"},
      {icon: <Server size={18} />, description: "No browser or server management needed"}],  
    content: (
      <div className="h-full w-full object-cover flex items-center justify-center text-white">
        <img
          src="https://asteroid.ai/features/runs.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export function Features() {
    return (
      <div className="mt-8 py-8 flex flex-col w-full items-center">
        <h1 className="text-3xl font-semibold text-white mb-6">Its as easy as it looks</h1>
        <StickyScroll content={content} contentClassName={undefined} />
      </div>
    );
  }