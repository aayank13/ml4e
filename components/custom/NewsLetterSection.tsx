'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    
    try {
      // Here you would typically call your newsletter subscription API
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto bg-gray-100/50 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Join our newsletter</h2>
            <p className="text-muted-foreground">
              Get updates from us weekly about project management
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex gap-3 w-full md:w-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="max-w-sm"
            />
            <Button 
              type="submit" 
              className="bg-[#CBE432] text-black hover:bg-[#CBE432]/90"
              disabled={status === 'loading'}
            >
              Subscribe
            </Button>
          </form>
        </div>

        {status === 'success' && (
          <p className="mt-2 text-sm text-green-600">
            Thanks for subscribing!
          </p>
        )}
        {status === 'error' && (
          <p className="mt-2 text-sm text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  )
}

