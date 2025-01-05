import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative max-w-7xl bg-gray-100 mx-3 md:mx-5 lg:mx-auto mt-20 rounded-xl">
      <div className="px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-center">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight sm:text-7xl">
          <span className="block">
            Machine learning{' '}
            <span className="relative whitespace-nowrap">with,</span>
          </span>{' '}
          <span className="text-[#FF9F43] mt-2 block">ML4E</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-gray-600">
        Learn and master machine learning effortlessly with a comprehensive platform designed for collaboration and growth
        </p>
        <div className="mt-10 flex justify-center gap-x-4">
          <Button
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-900 text-white rounded-full px-8 h-12 shadow-sm shadow-[#6C5CE7]/25"
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-12 border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            About Us
          </Button>
        </div>
        
        {/* Browser-like Dashboard Preview */}
        <div className="mt-16 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-gray-900/10">
          {/* Browser Controls */}
          <div className="flex items-center gap-2 border-b bg-gray-50/80 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-gray-300" />
              <div className="h-3 w-3 rounded-full bg-gray-300" />
              <div className="h-3 w-3 rounded-full bg-gray-300" />
            </div>
            <div className="flex-1">
              <div className="mx-auto max-w-md">
                <div className="flex h-8 items-center rounded-md bg-white px-3 shadow-sm ring-1 ring-gray-900/10">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                  </svg>
                  <span className="ml-2 text-sm text-gray-500">www.ml4e.com</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="p-2">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Dashboard preview"
              width={1200}
              height={600}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>

      
    </div>
  )
}